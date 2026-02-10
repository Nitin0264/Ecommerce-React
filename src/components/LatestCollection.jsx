import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { userContext } from '../userContext/UserContext'
import Title from './Title'

function LatestCollection() {
 const {products} = useContext(userContext)
  return (
    <div>
      <div className=''>
        <div className='flex flex-col items-center justify-center mt-3'>
          <Title t1="Latest" t2 ="Collection" des = "Lorem ipsum dolor sit amet consectetur adipisicing." />
        </div>
        <div className="flex flex-wrap gap-4 my-4 justify-center items-center">
          {
            products.slice(0,6).map((obj,index)=>(<ProductItem key={index}  img={obj.image[0]} name={obj.name} price={obj.price} />))
          }
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-3'>
          <Title t1="Best" t2 ="Sellers" des = "Lorem ipsum dolor sit amet consectetur adipisicing." />
        </div>
    </div>
  )
}

export default LatestCollection