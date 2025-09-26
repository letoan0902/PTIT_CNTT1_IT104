const initialState = 0;
type ActionType = {
  type: string;
  payload: unknown;
};
export const counterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};
