type ThemeState = "light" | "dark";
type ActionType = {
  type: string;
  payload: unknown;
};
const themeFromStorage = localStorage.getItem("theme");
const initialState: ThemeState = themeFromStorage === "dark" ? "dark" : "light";

export const themeSliceReducer = (state = initialState, action: ActionType) => {
  if (action.type === "changeTheme") {
    const newTheme = state === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    return newTheme;
  } else {
    return state;
  }
};
