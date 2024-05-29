import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";
// import slugReducer from "./slugReducer";

const rootReducer = combineReducers({
  wishlistState: wishlistReducer,
//   slugState: slugReducer,
});

export default rootReducer;
