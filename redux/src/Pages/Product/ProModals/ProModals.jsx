
import React from 'react'
import { Modal } from 'react-bootstrap';


const ProModals = (props) => {

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
        <h4>Add Category</h4>
          <hr />

          <form action="#">
            <div className="my-2">
                <label htmlFor="Name">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="my-2">
                <label htmlFor="Slug">Slug</label>
                <input type="text" className="form-control" />
            </div>
           
            <div className="my-2">
                <label htmlFor="Photo">Photo</label>
                <input type="file" className="form-control" />
            </div>
            <div className="my-2">
                
                <input type="submit" className="btn btn-primary w-100" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
     );
 

 
  
}

export default ProModals;
