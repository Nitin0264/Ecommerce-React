import React , { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export let userContext = createContext()

function Provider({children}){
  let name = "nittin"
  const obj = {
    name,products
  }
  return(
    <userContext.Provider value={obj}>
      {children}
      </userContext.Provider>
  )
}

export default Provider