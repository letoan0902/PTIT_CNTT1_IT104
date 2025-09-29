import axios from "axios";
import React, { useState } from "react";

export default function Ex02() {
  const [file, setFile] = useState<File | null>(null);
  const [desc, setDesc] = useState<string>("");
  const [imageUrl, setImageUlr] = useState<string>("");
  const [uploadedDesc, setUploadedDesc] = useState<string>("");
  const [deleteToken, setDeleteToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Vui lòng chọn file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Session39");
    formData.append("cloud_name", "dwzqispdh");
    if (desc) {
      formData.append("context", `caption=${desc}|alt=${desc}`);
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwzqispdh/image/upload",
        formData
      );
      console.log(response);
      if (response.status === 200) {
        setImageUlr(response.data.secure_url);
        setUploadedDesc(response.data.context.custom.caption);
        setDeleteToken(response.data.delete_token);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteToken) {
      alert("Không lấy được delete_token, thử lại sau");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwzqispdh/delete_by_token",
        { token: deleteToken }
      );
      if (response.status === 200) {
        setImageUlr("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h1>Upload ảnh lên Cloudinary</h1>
      <div>
        <input
          type="file"
          title="Chọn file để upload"
          onChange={handleChangeFile}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nhập miêu tả ảnh"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleUpload}>Upload</button>
      </div>
      {imageUrl && (
        <div style={{ marginTop: 24 }}>
          <img
            src={imageUrl}
            alt={uploadedDesc}
            style={{
              width: "100%",
              borderRadius: 10,
              marginBottom: 8,
              border: "1px solid #eee",
            }}
          />
          <div>
            <b>Mô tả:</b> {uploadedDesc || "(Không có mô tả)"}
          </div>
          <div>
            <button onClick={handleDelete}>Xoá ảnh</button>
          </div>
        </div>
      )}
      {loading && <div className="loader">Đang tải ảnh...</div>}
    </div>
  );
}
