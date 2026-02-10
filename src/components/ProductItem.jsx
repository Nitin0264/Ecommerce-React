import React from 'react'

function ProductItem({img,name,price}) {
  return (
    <div>
    <div>
        <img className ='h-[290px] w-[250px]' src ={img} alt= ''/>
        <p>{name}</p>
        <p>${price}</p>
    </div>
    </div>
  )
}

export default ProductItem