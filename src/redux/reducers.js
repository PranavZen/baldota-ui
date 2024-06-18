import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";
import accordianReducer from "./accordianReducer";
import qtReducers from "./qtReducer";

const rootReducer = combineReducers({
  wishlistState: wishlistReducer,
  accordianState: accordianReducer,
  qtReducers: qtReducers,
});

export default rootReducer;