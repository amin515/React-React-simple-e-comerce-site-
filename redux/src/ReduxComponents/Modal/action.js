import { BRAND_MODAL,  CATEGORY_MODAL, TAG_MODAL } from "./actionType";

// create brand modal
const brandModal = (type) => {
  
    if(type === 'brand_modal'){
        return {
            type : BRAND_MODAL
        }
    }else if(type === 'category_modal'){
      return {
        type : CATEGORY_MODAL
      }
    }else if(type === 'tag_modal'){
      return {
        type : TAG_MODAL
      }
    }
}

export default brandModal;