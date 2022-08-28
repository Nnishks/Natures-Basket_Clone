import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  if (!isAuth) {
    alert("pls login");
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
