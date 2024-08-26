import { Route, Routes, useLocation } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import Layouts from "./layouts/Layouts";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Otp from "./pages/auth/Otp";
import ResetPassword from "./pages/auth/ResetPassword";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList";




function App() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({top:0, left:0 , behavior:"instant"})
  },[location.key])

  return (
    <Routes>
      <Route element={<Layouts/>} >
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/:id" element={<ProductDetails/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        {/* not found page  */}
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
