
// product reducer


import { PRODUCT_ADDED, PRODUCT_DELETED, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT} from "./action";
import initialState from "./initialState";



const productReducer = (state = initialState, {type , payload}) => {

  switch (type) {

    case PRODUCT_REQUEST:
      return {
        ...state,
        skeliton : true
      }

    case PRODUCT_SUCCESS:
      return {
        ...state,
        skeliton : false,
        products : payload
      }

    case PRODUCT_FAIL:
      return {
        ...state,
        skeliton : false,
        error : payload
      }

    case SINGLE_PRODUCT:
      return {
        ...state,
        singelProduct : state.products.find( data => data._id === payload),
      }
    case PRODUCT_DELETED:
      return {
        ...state,
        products : state.products.filter( data => data._id !== payload),
      }
    case PRODUCT_ADDED:
      return {
        ...state,
        products : [...state.products, payload]
      }
  
    default:
      return state;
  }

}

export default productReducer;