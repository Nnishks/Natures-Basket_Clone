import { Routes,Route } from "react-router-dom";
import Cart from "../Components/Cart";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Login from "../Components/Login";

function AllRoutes () {
    return (
        <Routes>
           <Route path='/' element={ <Home /> }/>
           {/* <Route path='/login' element={<Login />}/> */}
           
           <Route path='/cart' element={<Cart /> } /> 
          {/* <Route path='path' element={}/> 
          <Route path='path' element={}/>
          <Route path='path' element={}/>
          <Route path='path' element={}/>
          <Route path='path' element={}/> */}
        </Routes>
      );
}

export default AllRoutes  ;