const initialState: number[] = [];
type ActionType = {
  type: string;
  payload: number;
};
export const randomReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "random":
      return [...state, action.payload];
    default:
      return state;
  }
};
