import type { TableProps } from "antd";
import { Button, Space, Table, Tag } from "antd";

interface PostRecord {
  id: string;
  title: string;
  image: string;
  content: string;
  create_at: string;
  isActive: boolean;
}

interface PostTableProps {
  data?: PostRecord[];
  onBlock?: (record: PostRecord) => void;
  onEdit?: (record: PostRecord) => void;
  onDelete?: (record: PostRecord) => void;
}

function PostTable({ data, onBlock, onEdit, onDelete }: PostTableProps) {
  const columns: TableProps<PostRecord>["columns"] = [
    {
      title: "STT",
      key: "stt",
      render: (_: unknown, __: PostRecord, index: number) => index + 1,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (img: string) => (
        <img
          src={img}
          alt="Hình ảnh"
          style={{ width: 60, height: 40, objectFit: "cover" }}
        />
      ),
    },

    {
      title: "Ngày viết",
      dataIndex: "create_at",
      key: "create_at",
    },
    {
      title: "Trạng thái",
      key: "isActive",
      dataIndex: "isActive",
      render: (isActive) => {
        const color = isActive ? "green" : "volcano";
        const text = isActive ? "Đã xuất bản" : "Ngừng hoạt động";
        return (
          <Tag color={color} key={text}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Chức năng",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            color="gold"
            variant="solid"
            onClick={() => {
              if (onBlock) onBlock(record);
            }}
          >
            Chặn
          </Button>
          <Button
            color="gold"
            variant="filled"
            onClick={() => {
              if (onEdit) onEdit(record);
            }}
          >
            Sửa
          </Button>
          <Button
            color="danger"
            variant="outlined"
            onClick={() => {
              if (onDelete) onDelete(record);
            }}
          >
            Xoá
          </Button>
        </Space>
      ),
    },
  ];

  const defaultData: PostRecord[] = [
    {
      id: "1",
      title: "State trong ReactJS",
      content: "Giới thiệu về state trong ReactJS",
      image:
        "https://statics.cdn.200lab.io/2024/10/state-management-trong-react.jpg",
      create_at: "16/9/2025",
      isActive: true,
    },
  ];

  return (
    <Table<PostRecord>
      columns={columns}
      dataSource={data || defaultData}
      rowKey="id"
      pagination={false}
      locale={{
        emptyText:
          data && data.length === 0
            ? "Không có kết quả tìm kiếm"
            : "Không có dữ liệu",
      }}
    />
  );
}

export default PostTable;
