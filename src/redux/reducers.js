import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";
import accordianReducer from "./accordianReducer";
// import slugReducer from "./slugReducer";

const rootReducer = combineReducers({
  wishlistState: wishlistReducer,
  //   slugState: slugReducer,
  accordianState: accordianReducer,
});

export default rootReducer;
