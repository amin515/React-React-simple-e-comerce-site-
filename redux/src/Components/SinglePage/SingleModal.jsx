
import React from 'react'
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const SingleModal = (props) => {

  const {singelProduct} = useSelector(state => state.product)



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     <Modal.Header closeButton>
     <h4>{singelProduct.name}</h4>
     </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <img style={{width : '100%0', height : '250px', objectFit : 'cover'}} src={`http://localhost:5030/images/products/${singelProduct.photo}`} alt="" />
          </div>
          <div className="col-md-6">
            <h5>{singelProduct.name}</h5>
            <h6> Price : ${singelProduct.regular_price}</h6>
            <h6>Sale Price : ${singelProduct.sale_price ? singelProduct.sale_price : singelProduct.regular_price}</h6> 
            <h6>Stock : {singelProduct.stock}</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, sint eligendi alias ipsum voluptatum itaque qui ex sit, repellendus molestiae, corrupti voluptas magnam eum libero!</p>
            
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}


export default SingleModal;
