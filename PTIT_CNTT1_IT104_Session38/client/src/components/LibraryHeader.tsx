import { Typography } from "antd";

const { Title } = Typography;

export default function LibraryHeader() {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
      <span
        style={{
          fontSize: 32,
          marginRight: 12,
          display: "inline-block",
          verticalAlign: "middle",
        }}
      >
        <svg height="32" width="32" viewBox="0 0 32 32">
          <rect x="2" y="4" width="20" height="24" rx="2" fill="#8ED1FC" />
          <rect x="8" y="2" width="20" height="24" rx="2" fill="#7BDCB5" />
          <rect x="14" y="7" width="16" height="20" rx="2" fill="#F78DA7" />
        </svg>
      </span>
      <Title level={2} style={{ margin: 0 }}>
        Book Library Manager
      </Title>
    </div>
  );
}
