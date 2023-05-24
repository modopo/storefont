import { combineReducers, createStore } from "redux";
import categoryReducer from "./categories/categories";
import productReducer from "./products";
import cartReducer from "./cart";

const mainReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer
});

function store() {
  return createStore(mainReducer);
}

export default store;