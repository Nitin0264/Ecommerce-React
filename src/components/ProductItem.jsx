import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({img,name,id,index}) {
  return (
      <Link to={`/product/${id}`} key={index} className='h-[320px] w-[220px]'>
        <img src={img} alt='products'/>
      <h1>{name}</h1>
      {/* creating the parems here to pass  */}
    </Link >
  )
}

export default ProductItem