import { Input } from "antd";
import { debounce } from "lodash";
import { useMemo } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

function SearchInput({
  placeholder = "Nhập từ khoá tìm kiếm",
  onSearch,
  className = "w-72",
}: SearchInputProps) {
  // Debounce search để tránh gọi API liên tục
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        onSearch?.(value);
      }, 500),
    [onSearch]
  );

  return (
    <Input
      placeholder={placeholder}
      className={className}
      onChange={(e) => debouncedSearch(e.target.value)}
    />
  );
}

export default SearchInput;
