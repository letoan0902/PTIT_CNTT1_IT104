export interface FilterState {
  status: "Tất cả" | "Hoàn thành" | "Chưa xong";
  priority: "Tất cả" | "Cao" | "Trung bình" | "Thấp";
  searchText: string;
}
