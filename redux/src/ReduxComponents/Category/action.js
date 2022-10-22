import axios from "axios";
import { CATS_FAIL, CATS_REQUEST, CATS_SUCCESS } from "./actionType"
import swal from 'sweetalert';

export const catsRequest = () => ({
    type : CATS_REQUEST
});

// brand success
export const catsSuccess = (payload) => ({
   type : CATS_SUCCESS,
   payload : payload
});

export const catsFailed = (payload) => ({
   type : CATS_FAIL,
   payload : payload
});


// get all brands
export const getAllCats = () => async(dispatch) => {
 
    try {
        
        dispatch(catsRequest());
        await axios.get(`http://localhost:5030/api/v1/brands`)
        .then( res => {
            dispatch(catsSuccess(res.data))
          
        })
        .catch(error => dispatch(catsFailed(error.message)));
    } catch (error) {
        dispatch(catsFailed(error.message))
    }

}


// create brands
export const createBrand = (data) => async(dispatch) => {
  
    try {
        
        await axios.post(`http://localhost:5030/api/v1/brands`, data)
        .then( res => {
            dispatch(getAllCats())
            swal({
                title: "Good job!",
                text: "Brand added successfull !",
                icon: "success",
                button: "Aww yiss!",
              })
            })
        .catch(error => {
            dispatch(catsFailed(error.message));
            swal({
                title: "Failed job!",
                text: "Product added successfull !",
                icon: "danger",
                button: "Aww yiss!",
              })
        });
    } catch (error) {
        console.log(dispatch(catsFailed(error.message)))
        
    }
}