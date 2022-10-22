
// create rootReducer

import { combineReducers } from "redux";
import brandReducer from "./Brand/brandReducer";
import modalReducer from "./Modal/modalReducer";
import productReducer from "./Products/productReducer";


const rootReducer = combineReducers({
  product : productReducer,
  modal  : modalReducer,
  brand : brandReducer
});

// export 
export default rootReducer;