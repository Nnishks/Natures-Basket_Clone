import { children, createContext, useReducer, useState } from "react";
import reducer from "./Reducer";


  export const AuthContext=createContext();


  let xx= JSON.parse(localStorage.getItem("login")).email.slice(0,11)
  // console.log(typeof(xx))
  // let y= xx.splice()
  export function AuthContextProvider({children}){
 const cartNumauth=JSON.parse(localStorage.getItem("cartmei"))
      const [stateA,dispatchA]=useReducer(reducer,cartNumauth.length)
      const [stateB,dispatchB]=useReducer(reducer,false)
      const [isAuth,setisAuth] = useState(JSON.parse(localStorage.getItem("login"))
      || false )
      const [email,setemail]= useState(xx || false)
      const toggleUser=(email)=>{
         setisAuth(true)
          setemail(email)
      }
      const logout=()=>{
        setisAuth(false)
        setemail(null)
        localStorage.removeItem("login")
        console.log(isAuth,email)
      }
     

    return(
      <AuthContext.Provider value={{stateA,dispatchA,stateB,dispatchB,
        isAuth,toggleUser,email,logout}}>
            {children}
        </AuthContext.Provider>
    )
  }