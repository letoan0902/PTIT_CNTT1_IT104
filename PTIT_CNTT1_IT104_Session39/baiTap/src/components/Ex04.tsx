import React, { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";

export default function CompressAndUpload() {
  const [previewLocal, setPreviewLocal] = useState(null); // ảnh nén local (base64)
  const [uploading, setUploading] = useState(false);
  const [cloudUrl, setCloudUrl] = useState(null); // URL gốc trên Cloudinary
  const [displayUrl, setDisplayUrl] = useState(null); // URL hiển thị (đã thêm transform)

  // Nén ảnh bằng react-image-file-resizer
  const resizeFileToBlob = (
    file,
    {
      maxWidth = 1600,
      maxHeight = 1600,
      quality = 85, // 0 - 100 (85 là “đẹp & nhẹ”)
      format = "JPEG", // "JPEG" | "WEBP" | "PNG"
    } = {}
  ) =>
    new Promise((resolve, reject) => {
      try {
        Resizer.imageFileResizer(
          file,
          maxWidth,
          maxHeight,
          format,
          quality,
          0, // rotation
          (uri) => {
            // uri: base64 string (default)
            // Chuyển base64 -> Blob
            const arr = uri.split(",");
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) u8arr[n] = bstr.charCodeAt(n);
            resolve(new Blob([u8arr], { type: mime }));
          },
          "base64"
        );
      } catch (err) {
        reject(err);
      }
    });

  const withTransform = (
    secureUrl: string,
    transform = "f_auto,q_auto:good"
  ) => {
    return secureUrl.replace("/upload/", `/upload/${transform}/`);
  };

  const onSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const compressedBlob = await resizeFileToBlob(file, {
        maxWidth: 1600,
        maxHeight: 1600,
        quality: 85,
        format: "JPEG",
      });

      const reader = new FileReader();
      reader.onload = () => setPreviewLocal(reader.result);
      reader.readAsDataURL(compressedBlob);

      setUploading(true);
      const form = new FormData();
      form.append(
        "file",
        new File([compressedBlob], "compressed.jpg", { type: "image/jpeg" })
      );
      form.append("upload_preset", "Session39");

      const url = `https://api.cloudinary.com/v1_1/dwzqispdh/image/upload`;
      const res = await axios.post(url, form);

      const original = res.data.secure_url;
      const transformed = withTransform(original, "f_auto,q_auto:good");

      setCloudUrl(original);
      setDisplayUrl(transformed);
    } catch (err) {
      console.error(err);
      alert("Upload lỗi. Kiểm tra CloudName / UploadPreset hoặc kết nối mạng.");
    } finally {
      setUploading(false);
    }
  };

  const resetAll = () => {
    setPreviewLocal(null);
    setCloudUrl(null);
    setDisplayUrl(null);
    setUploading(false);
  };

  return (
    <div style={{ maxWidth: 900, margin: "24px auto", padding: 16 }}>
      <h2>Upload ảnh có nén (react-image-file-resizer → Cloudinary)</h2>

      <input
        type="file"
        accept="image/*"
        onChange={onSelect}
        disabled={uploading}
      />
      {uploading && <p>Đang upload...</p>}

      {/* Xem nhanh ảnh nén local (trước khi upload) */}
      {previewLocal && (
        <div style={{ marginTop: 16 }}>
          <p>Preview ảnh đã nén (local):</p>
          <img
            src={previewLocal}
            alt="local preview"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>
      )}

      {/* Ảnh hiển thị từ Cloudinary với f_auto,q_auto:good */}
      {displayUrl && (
        <div style={{ marginTop: 16 }}>
          <p>Ảnh sau khi upload (đã nén + tối ưu hiển thị Cloudinary):</p>
          <img
            src={displayUrl}
            alt="cloudinary"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
          <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
            <a href={cloudUrl} target="_blank" rel="noreferrer">
              Mở URL gốc
            </a>
            <a href={displayUrl} target="_blank" rel="noreferrer">
              Mở URL hiển thị (f_auto,q_auto)
            </a>
            <button onClick={resetAll}>Chọn ảnh khác</button>
          </div>
        </div>
      )}
    </div>
  );
}
