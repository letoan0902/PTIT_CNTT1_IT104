import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message } from "antd";

interface FilterDropdownProps {
  onFilterChange?: (key: string) => void;
}

function FilterDropdown({ onFilterChange }: FilterDropdownProps) {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    onFilterChange?.(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "Tất cả",
      key: "all",
    },
    {
      label: "Đã xuất bản",
      key: "published",
    },
    {
      label: "Ngừng hoạt động",
      key: "inactive",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} overlayStyle={{ minWidth: 150 }}>
      <Button
        style={{
          width: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 12px",
        }}
      >
        <span>Lọc bài viết</span>
        <DownOutlined />
      </Button>
    </Dropdown>
  );
}

export default FilterDropdown;
