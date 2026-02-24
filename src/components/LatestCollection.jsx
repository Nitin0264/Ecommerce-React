import React, { useContext } from 'react'
import { userContext } from '../userContext/UserContext'
import ProductItem from './ProductItem'
import Title from './Title'

function LatestCollection() {
  const {products} = useContext(userContext)
  return (
    <div>
    <div className =' flex flex-col flex-wrap  items-center justify-center my-4 '>
    <div className ='my-4 flex flex-col items-center justify-center'>
      <Title  t1 ='Latest' t2 = 'Collection' des ='We are the Bestseller Here in CodewareIT' />
    </div>
    <div className = 'flex flex-wrap gap-4 items-center justify-center'>
      {
          products.slice(12,24).map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              price={item.price} 
              img={item.image[0]} 
            />
          ))
        }

    </div>
    </div>
    </div>
    
  )
}

export default LatestCollection