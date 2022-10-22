
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';
import SinglePage from "./Components/SinglePage/SinglePage";
import Create from "./Pages/Create/Create";
import Category from "./Pages/Product/Category";
import Product from "./Pages/Product/Product";
import Tag from "./Pages/Product/Tag";
import Shop from "./Pages/Shop/Shop";
import { getAllBrands } from "./ReduxComponents/Brand/action";
import { getAllProducts } from "./ReduxComponents/Products/actionType";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {

  //use dispatch for get data from redux store
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllProducts())
      
    }, [dispatch])
  
  //useeffect for get all brands
  useEffect(() => {
    dispatch(getAllBrands())
  }, [dispatch])
  
  return (
  <>
  <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/admin/product" element={<Product/>}/>
    <Route path="/admin/product/create" element={<Create/>}/>
    <Route path="/singlepage" element={<SinglePage/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/tag" element={<Tag/>}/>
  </Routes>
  </>
  );
}

export default App;
