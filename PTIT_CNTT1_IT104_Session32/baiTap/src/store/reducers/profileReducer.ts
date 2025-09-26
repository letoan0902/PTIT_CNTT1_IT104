type UserType = {
  id: number;
  name: string;
  gender: "Nam" | "Nữ";
  dob: string;
  address: string;
};
const initialState: UserType[] = [
  {
    id: 1,
    name: "Nguyễn Văn Nam",
    gender: "Nam",
    dob: "20/03/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    name: "Nguyễn Thị B",
    gender: "Nữ",
    dob: "20/11/2023",
    address: "Cầu giấy, Hà Nội",
  },
];

export const profileReducer = (state = initialState, _) => {
  return state;
};
