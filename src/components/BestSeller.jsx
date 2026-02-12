import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { userContext } from '../userContext/UserContext'
import ProductItem from './ProductItem'

function BestSeller() {
  const { products } = useContext(userContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((item) => item.bestseller);
    setBestSellers(filteredProducts.slice(0, 5));
  }, [products]);

  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title z1='Best' z2='Sellers' sell='We are the Bestseller Around the World' />
      </div>

      <div className='flex gap-4'>
        {
          bestSellers.map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              price={item.price} 
              img={item.image} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller;