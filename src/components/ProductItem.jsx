import React from 'react'

function ProductItem({img,name,price}) {
  return (
    <div className='flex mt-4 gap-2'>
      <div>
        <img className='h-[290px] w-[222px] ' src={img} alt="" />
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default ProductItem