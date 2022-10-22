
import React from 'react'
import { useState } from 'react';
import ProModals from './ProModals/ProModals';

const Category = () => {

    const [modalShow, setModalShow] = useState(false);

    const handleShowModal = () => {
       setModalShow(true)

    }
  return (
    <>
    <ProModals
     show={modalShow}
     onHide={() => setModalShow(false)}
     
     />
    <div>
        <div className="col">
        <button className='btn btn-primary my-2' onClick={handleShowModal}>Add Category</button>
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
                            <tr>
                                <th>1</th>
                                <th>Sony A77r III</th>
                                <th>2000</th>
                                <th>1800</th>
                                <th>22</th>
                                <th><img style={{width : '40px', height : '40px', objectFit : 'cover'}} src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg" alt="" /></th>
                                <th>
                                    <a href="" className='btn btn-info'><i class='fas fa-eye'></i></a> &nbsp;
                                    <a href="" className='btn btn-warning'><i class='fas fa-edit'></i></a> &nbsp;
                                    <a href="" className='btn btn-danger'><i class='fas fa-trash'></i></a>
                                </th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>Sony A77r III</th>
                                <th>2000</th>
                                <th>1800</th>
                                <th>22</th>
                                <th><img style={{width : '40px', height : '40px', objectFit : 'cover'}} src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg" alt="" /></th>
                                <th>
                                    <a href="" className='btn btn-info'><i class='fas fa-eye'></i></a> &nbsp;
                                    <a href="" className='btn btn-warning'><i class='fas fa-edit'></i></a> &nbsp;
                                    <a href="" className='btn btn-danger'><i class='fas fa-trash'></i></a>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Category;