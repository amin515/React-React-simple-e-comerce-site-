import { BRAND_FAIL, BRAND_REQUEST, BRAND_SUCCESS } from "./actionType";
import initialState from "./initialState";

const brandReducer = (state = initialState, {type, payload}) => {
   switch (type) {
    case BRAND_REQUEST :
        return {
           ...state,
        }
    case BRAND_SUCCESS :
        return {
           ...state,
           brands : payload
        }
    case BRAND_FAIL :
        return {
           ...state,
           error : payload
        }
   
    default:
       return state;
   }
}

export default brandReducer;