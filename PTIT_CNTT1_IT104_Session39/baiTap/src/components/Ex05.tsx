import React, { useState } from "react";
import axios from "axios";

export default function Ex05() {
  const [uploading, setUploading] = useState(false);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  const withTransform = (secureUrl: string, transform: string) =>
    secureUrl.replace("/upload/", `/upload/${transform}/`);

  const makeThumb = (secureUrl: string) =>
    withTransform(secureUrl, "c_fill,w_300,h_300,f_auto,q_auto");

  const onSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "Session39");

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dwzqispdh/image/upload`,
        form
      );

      const url = res.data.secure_url;
      setOriginalUrl(url);
      setThumbUrl(makeThumb(url));
      setShowOriginal(false);
    } catch (err) {
      console.error(err);
      alert("Upload lỗi. Kiểm tra cloudName/uploadPreset");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "24px auto", padding: 16 }}>
      <h2>Upload → Tạo thumbnail (Cloudinary transformations)</h2>
      <input
        type="file"
        accept="image/*"
        onChange={onSelect}
        disabled={uploading}
        title="Chọn file ảnh để upload"
      />
      {uploading && <p>Đang upload...</p>}

      {/* Hiển thị thumbnail */}
      {thumbUrl && !showOriginal && (
        <div style={{ marginTop: 16 }}>
          <p>Thumbnail (nhấn để xem ảnh gốc):</p>
          <img
            src={thumbUrl}
            alt="thumbnail"
            style={{
              width: 300,
              height: 300,
              objectFit: "cover",
              borderRadius: 8,
              cursor: "zoom-in",
            }}
            onClick={() => setShowOriginal(true)}
            loading="lazy"
          />
        </div>
      )}

      {/* Hiển thị ảnh gốc khi click thumbnail */}
      {originalUrl && showOriginal && (
        <div style={{ marginTop: 16 }}>
          <p>Ảnh gốc (nhấn để quay lại thumbnail):</p>
          <img
            src={withTransform(originalUrl, "f_auto,q_auto")}
            alt="original"
            style={{ maxWidth: "100%", borderRadius: 8, cursor: "zoom-out" }}
            onClick={() => setShowOriginal(false)}
          />
          <div style={{ marginTop: 8 }}>
            <a href={originalUrl} target="_blank" rel="noreferrer">
              Mở ảnh gốc
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
