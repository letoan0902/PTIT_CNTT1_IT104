import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { randomReducer } from "./randomReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  random: randomReducer,
});

export default rootReducer;
