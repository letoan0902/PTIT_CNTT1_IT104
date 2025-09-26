import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { counterReducer } from "./counterReducer";
import { randomReducer } from "./randomReducer";
import { changeStateReducer } from "./changeStateReducer";
import { themeSliceReducer } from "./themeSliceReducer";
import { accountReducer } from "./accountReducer";
import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  counter: counterReducer,
  random: randomReducer,
  changeState: changeStateReducer,
  theme: themeSliceReducer,
  account: accountReducer,
  task: taskReducer,
});

export default rootReducer;
