
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleModal from '../../Components/SinglePage/SingleModal';
import { deleteProduct, singleProducts } from '../../ReduxComponents/Products/actionType';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';



const ProductTable = () => {

    const { products } = useSelector(state => state.product)
    
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch()

    // handle show modal
    const handleShow = (id) => {

        dispatch(singleProducts(id))
        setModalShow(true)

    }

    // handle delete product

    const handleDeleteProduct = (e, id) => {
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              dispatch(deleteProduct(id))
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
       
    }




  return (
    <>
    <SingleModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
      <div>
        <div className="col">
        <Link to="/admin/product/create" className='btn btn-primary mb-2'>Add new</Link>
            <div className="card">
            
                <div className="card-body">
                    
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Regular price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map( (data, index) =>
                                <tr>
                                <th>{index + 1}</th>
                                <th>{data.name}</th>
                                <th>{data.regular_price}</th>
                                <th>{data.sale_price}</th>
                                <th>{data.stock}</th>
                                <th><img style={{width : '40px', height : '40px', objectFit : 'cover'}} src={`http://localhost:5030/images/products/${data.photo}`} alt="" /></th>
                                <th>
                                    
                                    <a href="#" className='btn btn-info' onClick={() => handleShow(data._id)}><i class='fas fa-eye'></i></a> &nbsp;
                                    <a href="#" className='btn btn-warning'><i class='fas fa-edit'></i></a> &nbsp;
                                    <a href="#" className='btn btn-danger' onClick={(e) => handleDeleteProduct(e,data._id)}><i class='fas fa-trash'></i></a>
                                </th>
                                </tr>
                                
                                )
                            }
                         
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default ProductTable;