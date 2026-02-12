import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../userContext/UserContext'
import Title from './Title';
import ProductItem from './ProductItem';

function RelatedProducts() {
  let {products} = useContext(userContext)
  const [RelatedProducts, setRelatedProducts] = useState([]);
  useEffect(()=>
  {
   const filteredProducts = products.filter((item) => item.bestseller === false);
  //  console.log('g ',filteredProducts)
  
   setRelatedProducts(filteredProducts.slice(0,15));
  }, [products]);

  return (
         <div className =' flex flex-col flex-wrap  items-center justify-center my-4 '>
      <div className='text-center py-8 text-3xl'>
        <Title y1='Related' y2='Products' sale='These are the Best suggestion for Related Products' />
      </div>

      <div className='flex gap-4 flex-wrap'>
        {
          RelatedProducts.map((item, index) => (
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

export default RelatedProducts