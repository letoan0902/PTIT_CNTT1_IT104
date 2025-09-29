import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef, useState } from "react";
import React from "react";
import axios from "axios";

export default function Ex03() {
  const [src, setSrc] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const cropperRef = useRef<Cropper>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setSrc(reader.result as string);
    reader.readAsDataURL(file);
  };

  const canvasToFile = async (
    canvas: HTMLCanvasElement,
    name = "cropped.jpg"
  ) =>
    new Promise<File>((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(new File([blob as Blob], name, { type: "image/jpeg" }));
        },
        "image/jpeg",
        1
      );
    });

  // Crop & upload
  const handleCropAndUpload = async () => {
    if (!cropperRef.current) return;
    const canvas = cropperRef.current?.cropper.getCroppedCanvas();
    if (!canvas) return;

    setUploading(true);
    try {
      const file = await canvasToFile(canvas, "cropped.jpg");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Session39");

      const url = `https://api.cloudinary.com/v1_1/dwzqispdh/image/upload`;
      const res = await axios.post(url, formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      setUploadedUrl(res.data.secure_url);
      setSrc(null);
    } catch (err) {
      console.error(err);
      alert("Upload thất bại. Kiểm tra cloudName/uploadPreset hoặc CORS.");
    } finally {
      setUploading(false);
    }
  };

  const resetAll = () => {
    setSrc(null);
    setUploadedUrl(null);
    setUploading(false);
  };

  return (
    <div style={{ maxWidth: 900, margin: "24px auto", padding: 16 }}>
      <h2>Crop ảnh trước khi upload </h2>

      {!uploadedUrl && (
        <div style={{ marginBottom: 12 }}>
          <input
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            disabled={uploading}
          />
        </div>
      )}

      {src && !uploadedUrl && (
        <>
          <Cropper
            src={src}
            ref={cropperRef}
            style={{ height: 400, width: "100%", marginBottom: 12 }}
            initialAspectRatio={1}
            aspectRatio={1}
            viewMode={1}
            guides={true}
            background={false}
            autoCropArea={1}
            responsive={true}
            checkOrientation={true}
            zoomable
            movable
            scalable
          />
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={handleCropAndUpload} disabled={uploading}>
              {uploading ? "Đang upload..." : "Crop & Upload"}
            </button>
            <button onClick={resetAll} disabled={uploading}>
              Huỷ
            </button>
          </div>
        </>
      )}

      {uploadedUrl && (
        <div style={{ marginTop: 16 }}>
          <p>Ảnh đã crop & upload thành công:</p>
          <img
            src={uploadedUrl}
            alt="Cropped uploaded"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <a href={uploadedUrl} target="_blank" rel="noreferrer">
              Mở ảnh trên Cloudinary
            </a>
            <button onClick={resetAll}>Chọn ảnh khác</button>
          </div>
        </div>
      )}
    </div>
  );
}
