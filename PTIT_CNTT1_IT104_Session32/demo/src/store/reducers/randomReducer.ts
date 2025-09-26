const initialState = 1;

type ActionTypes = {
  type: string;
  payload: number;
};
export const randomReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "random":
      return action.payload;
    default:
      return state;
  }
};
