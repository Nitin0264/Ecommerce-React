import React, { createContext, useState } from 'react'
import { products } from '../assets/frontend_assets/assets'

export const userContext = createContext()

function Provider({ children }) {
  const [cartItem, setCartItem] = useState({})

  const addToCart = (id, size) => {
    let cartData = structuredClone(cartItem)

    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1
      } else {
        cartData[id][size] = 1
      }
    } else {
      cartData[id] = {}
      cartData[id][size] = 1
    }
    setCartItem(cartData)
  }
  
  const name = 'Nitin'
  const obj = {
    products,
    name,
    cartItem,
    addToCart
  }

  return (
    <userContext.Provider value={obj}>
      {children}
    </userContext.Provider>
  )
}

export default Provider