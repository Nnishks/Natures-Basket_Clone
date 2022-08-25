import { children, createContext, useReducer } from "react";
import reducer from "./Reducer";


  export const AuthContext=createContext();



  export function AuthContextProvider({children}){
 const cartNumauth=JSON.parse(localStorage.getItem("cartmei"))
      const [stateA,dispatchA]=useReducer(reducer,cartNumauth.length)

    return(
        <AuthContext.Provider value={{stateA,dispatchA}}>
            {children}
        </AuthContext.Provider>
    )
  }