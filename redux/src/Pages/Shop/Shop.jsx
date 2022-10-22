import React, { useState } from 'react';
import SingleModal from '../../Components/SinglePage/SingleModal';
import { Link } from 'react-router-dom';
import './Shop.css';
import { useDispatch, useSelector } from 'react-redux';
import { singleProducts } from '../../ReduxComponents/Products/actionType';
import Skeleton from 'react-loading-skeleton';
import LoadingBar from 'react-top-loading-bar';


const Shop = () => {


    // conncet redux store
    const { products, error, skeliton } = useSelector( state => state.product)
    const {brands} = useSelector(state => state.brand)
    // show modal
    const [modalShow, setModalShow] = useState(false);
   
    // progressbar
    const [progress, setProgress] = useState(100)

    const dispatch = useDispatch()

    // handle show modal
    const handleShow = (id) => {

        dispatch(singleProducts(id))
        setModalShow(true)

    }

    // get singale product in single page
    const handleSingle = (id) => {
      dispatch(singleProducts(id))
    }
return (
<>
    <SingleModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <LoadingBar
    progress={progress}
    onLoaderFinished={() => setProgress(100)}
    />
    <div className='container my-5'>
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h4>Search</h4>
                    <input type="text" className='form-control' />

                    <div className="widget1 my-2">
                        <h4>Category</h4>
                        <hr />
                        <ul className='list-group'>
                            <li className='list-group-item'><a href="">Men</a></li>
                            <li className='list-group-item'><a href="">Women</a></li>
                            <li className='list-group-item'><a href="">Electronics</a></li>
                            <li className='list-group-item'><a href="">Kids</a></li>
                        </ul>
                    </div>

                    <div className="my-2">
                        <h4>Tags</h4>
                        <hr />
                        <div className="tags">
                            <a href="#">Shirt</a>
                            <a href="#">Pant</a>
                            <a href="#">Panjabi</a>
                            <a href="#">Sari</a>
                            <a href="#">Shoe</a>
                        </div>
                    </div>

                    <h4>Brand</h4>
                    <hr />
                    <div className="my-2 brand_1">
                        
                        {
                            brands.map(data => 
                              <div className="brand">
                                <a href="#">{data.name}</a>
                              </div>
                            )
                        }
                        
                    </div>


                    <div className="my-2">
                        <h4>Filter by Price</h4>
                        <div className="price_range">
                            <input type="range" min={10} max={10000} className='w-100' />
                            <input type="range" min={10} max={10000} className='w-100' />
                            <input type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="row">
                {
                   skeliton && (

                    <>
                      <div className="col-md-4 my-2">
                            <Skeleton height={276} width={267}/>
                            <Skeleton height={2} width={267}/>
                            <Skeleton height={30} width={170}/>
                            <Skeleton height={20} width={100}/>
                            <Skeleton height={20} width={150}/>
                            <Skeleton height={15} width={80}/>
                        <div className='d-flex gap-5'>
                            <Skeleton height={40} width={95}/>
                            <Skeleton height={40} width={95}/>
                        </div>
                     </div>

                      <div className="col-md-4 my-2">
                            <Skeleton height={276} width={267}/>
                            <Skeleton height={2} width={267}/>
                            <Skeleton height={30} width={170}/>
                            <Skeleton height={20} width={100}/>
                            <Skeleton height={20} width={150}/>
                            <Skeleton height={15} width={80}/>
                        <div className='d-flex gap-5'>
                            <Skeleton height={40} width={95}/>
                            <Skeleton height={40} width={95}/>
                        </div>
                     </div>
                      <div className="col-md-4 my-2">
                            <Skeleton height={276} width={267}/>
                            <Skeleton height={2} width={267}/>
                            <Skeleton height={30} width={170}/>
                            <Skeleton height={20} width={100}/>
                            <Skeleton height={20} width={150}/>
                            <Skeleton height={15} width={80}/>
                        <div className='d-flex gap-5'>
                            <Skeleton height={40} width={95}/>
                            <Skeleton height={40} width={95}/>
                        </div>
                     </div>
                    </>
                    
                   )
                }
               

                {
                    products && products.map( data => 
                     <div className="col-md-4 my-2">
                      <div className="card">
                        <div className="card-body">
                         <div className="card-img">
                            <img style={{height : '250px', objectFit : 'cover'}} src={`http://localhost:5030/images/products/${data.photo}`}
                                alt="" />
                        </div>
                        
                        </div>
                        <div className="card-footer">
                        <h5>{data.name}</h5>
                            <h6>Price : ${data.regular_price}</h6> 
                            <h6>Sale Price : ${data.sale_price ? data.sale_price : `${data.regular_price }`}</h6> 
                            <p>Stock : {data.stock}</p>
                            
                            
                             <a href="#" onClick={() => handleShow(data._id)} className='btn btn-primary'>Quick view</a>  &nbsp; &nbsp; 
                               
                             <Link to="/singlepage" className='btn btn-warning' onClick={() => handleSingle(data._id)}>Read More</Link>
                        </div>
                    </div>
                    </div> 
                 )
                }
               
            </div>
        </div>
    </div>

</div>

</>

)
}

export default Shop;