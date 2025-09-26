const initialState = 0;
type ActionTypes = {
  type: string;
  payload: unknown;
};
// state: Đại diện giá trị state hiện tại
// action: Đại diện cho giá trị người dùng truyền lên
export const counterReducer = (state = initialState, action: ActionTypes) => {
  console.log("Action: ", action);
  switch (action.type) {
    case "increase":
      // Cập nhật lại State = state + 1
      return state + 1;
    case "decrease":
      // Cập nhật lại State = state - 1
      return state - 1;
    default:
      return state;
  }
};
