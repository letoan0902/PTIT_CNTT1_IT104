import { combineReducers } from "redux";
import { listProductsReducer } from "./listProducts";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  listProducts: listProductsReducer,
  cart: cartReducer,
});