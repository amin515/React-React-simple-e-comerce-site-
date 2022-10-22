
import { CATS_FAIL, CATS_REQUEST, CATS_SUCCESS } from "./actionType";
import initialState from "./initialState";

const brandReducer = (state = initialState, {type, payload}) => {
   switch (type) {
    case CATS_REQUEST :
        return {
           ...state,
        }
    case CATS_SUCCESS :
        return {
           ...state,
           brands : payload
        }
    case CATS_FAIL :
        return {
           ...state,
           error : payload
        }
   
    default:
       return state;
   }
}

export default brandReducer;