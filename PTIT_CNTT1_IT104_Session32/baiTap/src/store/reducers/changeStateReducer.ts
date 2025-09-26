const initialState: string = "Demo";
type ActionType = {
  type: string;
  payload: unknown;
};
export const changeStateReducer = (
  state = initialState,
  action: ActionType
) => {
  if (action.type === "changeState") {
    return (state = "Test");
  } else {
    return state;
  }
};
