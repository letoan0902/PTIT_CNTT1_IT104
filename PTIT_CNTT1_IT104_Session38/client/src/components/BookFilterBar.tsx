import { Button, Input, Select, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../hook/useCustomerRedux";
import {
  resetSearch,
  searchCategory,
  searchName,
  searchSort,
} from "../slices/filterBook";

const { Option } = Select;

export default function BookFilterBar() {
  const filterBookData = useAppSelector((state) => state.filterBook);
  const dispatch = useAppDispatch();

  return (
    <Space
      direction="horizontal"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "end",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
      size="middle"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 15,
            marginBottom: 8,
            color: "#222",
            fontWeight: 500,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Search
        </span>
        <Input.Search
          placeholder="Search by title or author"
          style={{ width: 280 }}
          value={filterBookData.inputSearch}
          onChange={(e) => dispatch(searchName(e.target.value))}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 15,
            marginBottom: 8,
            color: "#222",
            fontWeight: 500,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Category
        </span>
        <Select
          defaultValue="All"
          style={{ width: 120 }}
          value={filterBookData.category}
          onChange={(value) => dispatch(searchCategory(value))}
        >
          <Option value="All">All</Option>
          <Option value="Science">Science</Option>
          <Option value="History">History</Option>
          <Option value="Novel">Novel</Option>
        </Select>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 15,
            marginBottom: 8,
            color: "#222",
            fontWeight: 500,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Sort by
        </span>
        <Select
          defaultValue="Title A → Z"
          style={{ width: 160 }}
          value={filterBookData.sort}
          onChange={(value) => dispatch(searchSort(value))}
        >
          <Option value="az">Title A → Z</Option>
          <Option value="za">Title Z → A</Option>
          <Option value="year-desc">Year ↓</Option>
          <Option value="year-asc">Year ↑</Option>
        </Select>
      </div>
      <Button onClick={() => dispatch(resetSearch())}>Clear</Button>
    </Space>
  );
}
