import "./index.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./component/pages/ShopCategory";
import Product from "./component/pages/Product";
import LoginSignup from "./component/pages/LoginSignup";
import Footer from "./component/Footer";
import men_banner from "./component/image/banner_mens.png";
import women_banner from "./component/image/banner_women.png";
import kid_banner from "./component/image/banner_kids.png";


import Shop from "./component/pages/Shop"
import Cart from "./component/pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner= {men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner = {kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        
        
        
      </BrowserRouter>
      <Footer/>

   
    </>
  );
}

export default App;
