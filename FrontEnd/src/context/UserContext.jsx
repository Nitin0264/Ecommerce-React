import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export let userContext = createContext()

function Provider({ children }) {
  // --- 1. Dynamic States ---
  const [products, setProducts] = useState([]) // Replacing static import with live array state
  const [cardItem, setCardItem] = useState({})
  const name = 'Nitin'
  const backendUrl = "http://localhost:8000" // Pointing to your local Express server

  // --- 2. Fetch Live Products From Backend API ---
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`)
      if (response.data.success) {
        setProducts(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to fetch product library from server")
    }
  }

  // Fetch product dataset once on application initialization
  useEffect(() => {
    getProductsData()
  }, [])

  // --- 3. Cart Functionality ---
  let addtocart = (id, size) => {
    let cardData = structuredClone(cardItem)
    if (cardData[id]) {
      if (cardData[id][size]) {
        cardData[id][size] += 1
      } else {
        cardData[id][size] = 1
      }
    } else {
      cardData[id] = {}
      cardData[id][size] = 1
    }
    setCardItem(cardData)
    toast.success("Added to cart!")
  }

  const gettotalCart = () => {
    let totalCount = 0
    for (let items in cardItem) {
      for (let size in cardItem[items]) {
        if (cardItem[items][size]) {
          totalCount += cardItem[items][size]
        }
      }
    }
    return totalCount
  }

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cardItem);
    if (quantity === 0) {
      delete cartData[itemId][size];
    } else {
      cartData[itemId][size] = quantity;
    }
    setCardItem(cartData);
  }

  const removeItem = (itemId, size) => {
    let cartData = structuredClone(cardItem)
    delete cartData[itemId][size];
    setCardItem(cartData);
  }

  const updateSize = (itemId, oldSize, newSize, quantity) => {
    let cartData = structuredClone(cardItem);
    delete cartData[itemId][oldSize];

    if (cartData[itemId][newSize]) {
      cartData[itemId][newSize] += quantity;
    } else {
      cartData[itemId][newSize] = quantity;
    }
    setCardItem(cartData);
  }

  // --- 4. Fixed Total Price Calculation ---
  const totalPrice = () => {
    let totalAmount = 0;
    for (const itemId in cardItem) {
      // Find the corresponding item information dynamically within your fetched list state
      const itemInfo = products.find((product) => product._id === itemId);
      
      if (!itemInfo) continue; // Skip item loop safely if the metadata isn't ready or found yet

      for (const size in cardItem[itemId]) {
        const qty = cardItem[itemId][size];
        if (qty > 0) {
          totalAmount += itemInfo.price * qty;
        }
      }
    }
    return totalAmount;
  }

  // Consolidating items inside values object container
  const obj = {
    products, 
    name, 
    addtocart, 
    gettotalCart, 
    cardItem, 
    updateQuantity, 
    removeItem, 
    updateSize,
    totalPrice, // Exposed so your checkout page can display costs automatically
    backendUrl
  }

  useEffect(() => {
    console.log(cardItem)
  }, [cardItem])

  return (
    <userContext.Provider value={obj}>
      {children}
    </userContext.Provider>
  )
}

export default Provider