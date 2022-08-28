import { children, createContext, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import reducer from "./Reducer";

export const AuthContext = createContext();

let xx = JSON.parse(localStorage.getItem("login")) || null;
console.log(xx);
if (xx !== null) {
  xx = xx.email.slice(0, 11);
}
// console.log(typeof(xx))
// let y= xx.splice()
//  const {params,setparamss} = useSearchParams();
export function AuthContextProvider({ children }) {
  // console.log(params)
  const cartNumauth = JSON.parse(localStorage.getItem("cartmei"));
  if (cartNumauth) {
    // cart length
    var cartL = cartNumauth.length;
  } else {
    cartL = 0;
  }
  const [stateA, dispatchA] = useReducer(reducer, cartL);
  console.log(stateA);
  const [stateB, dispatchB] = useReducer(reducer, false);
  // const [singlepageElem,setsinglepageElem] = useState({})
  const [isAuth, setisAuth] = useState(
    JSON.parse(localStorage.getItem("login")) || false
  );
  const [email, setemail] = useState(xx + "..." || null);

  // state b is for reg pop and while auto pop up from login
  const toggleUser = (email) => {
    setisAuth(true);
    setemail(email);
  };
  const logout = () => {
    setisAuth(false);
    setemail(null);
    localStorage.removeItem("login");
    // console.log(isAuth,email)
  };

  return (
    <AuthContext.Provider
      value={{
        stateA,
        dispatchA,
        stateB,
        dispatchB,
        isAuth,
        toggleUser,
        email,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
