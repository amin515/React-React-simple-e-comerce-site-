
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Brandmodal from './ProModals/Brandmodal';

const Brand = () => {
   
    const [modalShow, setModalShow] = useState(false);
    const {brands} = useSelector(state => state.brand)
    
    // console.log(brands)
  
    const handleShowModal = () => {
       setModalShow(true)
    }



   
  return (

<>
     <Brandmodal
     show={modalShow}
     onHide={() =>setModalShow(false)}
     
     />
    
    <div>
         <div className="col">
         <button className='btn btn-primary my-2' onClick={handleShowModal}>Add Brand</button>
            <div className="card">
                <div className="card-body">
                    
                   
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                brands.map( (data, index )=> 
                                    <tr>
                                    <th>{index + 1}</th>
                                    <th>{data.name}</th>
                                    <th>{data.slug}</th>
                                    <th><img style={{width : '40px', height : '40px', objectFit : 'cover'}} src={`http://localhost:5030/images/brand/${data.photo}`} alt="" /></th>
                                    <th>
                                        <a href="" className='btn btn-info'><i class='fas fa-eye'></i></a> &nbsp;
                                        <a href="" className='btn btn-warning'><i class='fas fa-edit'></i></a> &nbsp;
                                        <a href="" className='btn btn-danger'><i class='fas fa-trash'></i></a>
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

export default Brand;