import { applyMiddleware, combineReducers, createStore } from "redux";
import categoryReducer from "./categories/categories";
import productReducer from "./products";
import cartReducer from "./cart";
import thunk from 'redux-thunk';

const mainReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer
});

function store = () => createStore(mainReducer, applyMiddleware(thunk));

export default store;