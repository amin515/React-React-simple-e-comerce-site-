

import axios from "axios";
import { BRAND_FAIL, BRAND_REQUEST, BRAND_SUCCESS } from "./actionType"
import swal from 'sweetalert';
// brand request
export const brandRequest = () => ({
    type : BRAND_REQUEST
});

// brand success
export const brandSuccess = (payload) => ({
   type : BRAND_SUCCESS,
   payload : payload
});

export const brandFailed = (payload) => ({
   type : BRAND_FAIL,
   payload : payload
});


// get all brands
export const getAllBrands = () => async(dispatch) => {
 
    try {
        
        dispatch(brandRequest());
        await axios.get(`http://localhost:5030/api/v1/brands`)
        .then( res => {
            dispatch(brandSuccess(res.data))
          
        })
        .catch(error => dispatch(brandFailed(error.message)));
    } catch (error) {
        dispatch(brandFailed(error.message))
    }

}

// create brands
export const createBrand = (data) => async(dispatch) => {
  
    try {
        
        await axios.post(`http://localhost:5030/api/v1/brands`, data)
        .then( res => {
            dispatch(getAllBrands())
            swal({
                title: "Good job!",
                text: "Brand added successfull !",
                icon: "success",
                button: "Aww yiss!",
              })
            })
        .catch(error => {
            dispatch(brandFailed(error.message));
            swal({
                title: "Failed job!",
                text: "Product added successfull !",
                icon: "danger",
                button: "Aww yiss!",
              })
        });
    } catch (error) {
        console.log(dispatch(brandFailed(error.message)))
        
    }
}

 
