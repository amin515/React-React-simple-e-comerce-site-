
import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../../ReduxComponents/Brand/action';






const Brandmodal = (props) => {

  

  // call use state for get form data
  const [brand, setBrand] = useState({

    name : '',
    slug : '',
    photo : [],
    file : ''
  })

  const dispatch = useDispatch()
 
// handle change brand data from form

const handleChaneBrand = (e) => {
  setBrand((prebState) => ({
   ...prebState,
   [e.target.name] : e.target.value
  }))
}

// handle change brand photo

const handleChaneBrandPhoto = (e) => {
  setBrand((prevState) => ({
    ...prevState,
    file : e.target.files[0]
  }))
}



// make custom slug
const makeSlug = (data) =>{
  let arr = data.split(' ');
  return arr.join('-').toLowerCase();
}

// handle submit form
let slug = makeSlug(brand.slug)
const handleSubmitBrandForm = async (e) => {
  e.preventDefault()
  
  const data = new FormData();
  data.append('name', brand.name)
  data.append('slug',  slug)
  data.append('photo', brand.file)
  
  setBrand({
    name : '',
    slug : '',
    photo : [],
    file : ''
  })
 
 dispatch(createBrand(data))
 e.target.reset()
}
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body>
          <h4>Add Brand</h4>
          <hr />

          <form onSubmit={handleSubmitBrandForm} action="#">
            <div className="my-2">
                <label htmlFor="Name">Name</label>
                <input name='name' type="text" className="form-control" value={brand.name} onChange={handleChaneBrand}/>
            </div>
            <div className="my-2">
                <label htmlFor="Slug">Slug</label>
                <input name='slug' type="text" className="form-control" value={brand.slug} onChange={handleChaneBrand}/>
            </div>
           
            <div className="my-2">
                <label htmlFor="Photo">Photo</label>
                <input name='photo' type="file" className="form-control" multiple onChange={handleChaneBrandPhoto}/>
            </div>
            <div className="my-2">
                
                <input type="submit" className="btn btn-primary w-100" />
            </div>
          </form>
          
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
     );
}

export default Brandmodal;