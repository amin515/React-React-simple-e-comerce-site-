
import React from 'react'

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Single.css'
const SinglePage = () => {

    
  const { singelProduct } = useSelector(state => state.product)

  

  return (
    <div className='container my-5'>
      <div className="row single">
        <div className="col-md-6 my-4">
           <img style={{width : '500px', height : '500px', objectfit : 'cover'}} src={`http://localhost:5030/images/products/${singelProduct.photo}`} alt="" />
        </div>
        <div className="col-md-6 my-4">
          <div className="product__name">
            <ul>
              <li>
                <h2>{singelProduct.name}</h2>
              </li>
              <li><h4>Regular Price : ${singelProduct.regular_price}</h4></li>
              <li><h4>Sale Price : ${singelProduct.sale_price ? singelProduct.sale_price : singelProduct.regular_price}</h4></li>
              <li><h5>Stock : {singelProduct.stock}</h5></li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea autem doloribus doloremque tempore obcaecati optio ipsa ipsum at, dolor, nobis quod iure error eos ad quidem voluptatibus consequatur, blanditiis nesciunt fugiat magnam sequi? Sit aliquam quo iusto pariatur officiis?</p>
            </ul>
          </div>
          <a href="" className='btn btn-dark'>Add to cart</a> &nbsp;
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
        <div className="row my-5">
          <h3>Related products</h3>
          <div className="col-md-3">
            <img style={{width : '300px'}} src="https://static3.depositphotos.com/1007298/228/i/450/depositphotos_2284302-stock-photo-digital-slr-camera.jpg" alt="" />
          </div>
          <div className="col-md-3">
            <img style={{width : '300px'}} src="https://static3.depositphotos.com/1007298/228/i/450/depositphotos_2284302-stock-photo-digital-slr-camera.jpg" alt="" />
          </div>
          <div className="col-md-3">
            <img style={{width : '300px'}} src="https://static3.depositphotos.com/1007298/228/i/450/depositphotos_2284302-stock-photo-digital-slr-camera.jpg" alt="" />
          </div>
          <div className="col-md-3">
            <img style={{width : '300px'}} src="https://static3.depositphotos.com/1007298/228/i/450/depositphotos_2284302-stock-photo-digital-slr-camera.jpg" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SinglePage;
