import { BRAND_MODAL, CATEGORY_MODAL, TAG_MODAL } from "./actionType";
import initialState from "./initialState";


const modalReducer = (state = initialState, {type , payload}) => {

    switch (type) {
        case BRAND_MODAL:
          return {
            ...state,
            modal : true
          }
        case CATEGORY_MODAL:
          return {
            ...state,
            modal : true
          }
        case TAG_MODAL:
          return {
            ...state,
            modal : true
          }
    
        default:
            return state;
    }

}

// export modalReducer

export default modalReducer;