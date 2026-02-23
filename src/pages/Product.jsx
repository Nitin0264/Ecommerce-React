import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../userContext/UserContext'

function Product() {
  let {pid} = useParams()
  let {products} = useContext(userContext)

  let product = products.find(p=> p._id === pid)
  if(!product) return <h1>Product Not Found</h1>
    return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt='bestsellers' />
      <h1>{product.category}</h1>
    </div>
  )
}

export default Product