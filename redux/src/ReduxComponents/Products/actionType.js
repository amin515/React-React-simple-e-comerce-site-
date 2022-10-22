
// create action type

import axios from "axios";
import { PRODUCT_ADDED, PRODUCT_DELETED, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT,  } from "./action";
import swal from 'sweetalert';



export const productRequest = () => ({
    type : PRODUCT_REQUEST
})

// product success
export const productSuccess = (payload) => ({
    type : PRODUCT_SUCCESS,
    payload : payload
})

// product fail
export const productFail = (payload) => ({
    type : PRODUCT_FAIL,
    payload : payload
})

// product added
export const productAdded = (payload) => ({
  type : PRODUCT_ADDED,
  payload : payload
})


// get All products
export const getAllProducts = () => async(dispatch) => {
  
    try {
        
        dispatch(productRequest());
        await axios.get(`http://localhost:5030/api/v1/products`)
        .then( res => {
            dispatch(productSuccess(res.data))
            
        })
        .catch(error => dispatch(productFail(error.message)));
    } catch (error) {
        dispatch(productFail(error.message))
    }
}



// create products
export const createProducts = (data) => async(dispatch) => {
  
    try {
        
        await axios.post(`http://localhost:5030/api/v1/products`, data)
        .then( res => {
            dispatch({
                type : PRODUCT_ADDED,
                payload : res.data.products
            })
            swal({
                title: "Good job!",
                text: "Product added successfull !",
                icon: "success",
                button: "Aww yiss!",
              })
            })
        .catch(error => {
            dispatch(productFail(error.message));
            swal({
                title: "Failed job!",
                text: "Product added successfull !",
                icon: "danger",
                button: "Aww yiss!",
              })
        });
    } catch (error) {
        console.log(dispatch(productFail(error.message)))
        
    }
}

// create products
export const singleProducts = (id) => async(dispatch) => {
  
   
    // if get data from server request use this

    // try {
        
        
    //     await axios.get(`http://localhost:5030/api/v1/products/${id}`)
    //     .then( res => {
    //         dispatch({
    //             type : SINGLE_PRODUCT,
    //             payload :  res.data
    //         })
            
    //     })
    //     .catch(error => dispatch(productFail(error.message)));
    // } catch (error) {
    //     dispatch(productFail(error.message))
    // }


    // do not use server use only redux store use this

    dispatch({
        type : SINGLE_PRODUCT,
        payload : id
    })

}


// data deleted

export const deleteProduct = (id) => async(dispatch) => {
  
    try {
        await axios.delete(`http://localhost:5030/api/v1/products/${id}`)
        .then(res => {
          dispatch({
            type : PRODUCT_DELETED,
            payload : id
          })
        })
        .catch( err => {
            dispatch(productFail(err.message))
        });
        
    } catch (error) {
        dispatch(productFail(error.message)) 
    }
   

}
