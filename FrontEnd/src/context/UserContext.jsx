import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
// 1. Importing products directly from your assets folder structure
import { products as localProducts } from '../assets/frontend_assets/assets'

export let userContext = createContext()

function Provider({ children }) {
  // --- 1. Dynamic States ---
  // Initializing products state directly with local mock data for standalone deployment
  const [products, setProducts] = useState(localProducts)
  const [cardItem, setCardItem] = useState({})
  const name = 'Nitin'
  const backendUrl = "http://localhost:8000"

  // --- 2. Backend Fetch Disabled for Deployment ---
  /*
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

  useEffect(() => {
    getProductsData()
  }, [])
  */

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

  // --- 4. Total Price Calculation ---
  const totalPrice = () => {
    let totalAmount = 0;
    for (const itemId in cardItem) {
      const itemInfo = products.find((product) => product._id === itemId);
      
      if (!itemInfo) continue;

      for (const size in cardItem[itemId]) {
        const qty = cardItem[itemId][size];
        if (qty > 0) {
          totalAmount += itemInfo.price * qty;
        }
      }
    }
    return totalAmount;
  }

  const obj = {
    products, 
    setProducts,
    name, 
    addtocart, 
    gettotalCart, 
    cardItem, 
    updateQuantity, 
    removeItem, 
    updateSize,
    totalPrice,
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