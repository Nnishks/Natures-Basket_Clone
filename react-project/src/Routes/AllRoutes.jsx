import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Cart";
import Footer from "../Components/Footer";
import Gift from "../Components/Gift";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SearchPage from "../Components/SearchPage";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gift/:name" element={<SearchPage />} />
      <Route path="/gift" element={<Gift />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />

      {/* <Route path='path' element={}/> 
          <Route path='path' element={}/>
          <Route path='path' element={}/>
          <Route path='path' element={}/>
          <Route path='path' element={}/> */}
    </Routes>
  );
}

export default AllRoutes;
