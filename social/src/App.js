import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Products/Product.jsx";
import Shop from "./Pages/Shop/Shop.jsx";










function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Shop/>} />
    <Route path="/admin/product" element={<Product/>} />
    <Route path="/admin/product/create" element={<addProduct/>}/>
    <Route path="/admin/product/new" element={<newProduct/>}/>
   </Routes>
   </>
  );
}

export default App;
