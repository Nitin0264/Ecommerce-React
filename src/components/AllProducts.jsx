import React, { useContext } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import { userContext } from '../userContext/UserContext'

function AllProducts() {
  const { products } = useContext(userContext)
  return (
    <div className='flex relative flex-wrap '>
      <div className='my-13 fixed'>
        <button className='h-11 w-[170px] text-white text-semibold bg-black  rounded-xl  mb-5
          ' type='submit'>Filter</button>
        <div className='border border-gray-100  h-[170px] w-[200px] p-3'>
              <div >
                <h1 className='font-bold text-xl text-black'>CATEGORIES</h1>
              </div>

                  <div className='flex flex-col gap-3 my-3 '>
                    <label htmlFor="Men">
                      <input type="checkbox" name="Men" id="Men" /> Men
                    </label>
                    <label htmlFor="Women">
                      <input type="checkbox" name="Women" id="Women" /> Women
                    </label>
                    <label htmlFor="Kids">
                      <input type="checkbox" name="Kids" id="Kids" /> Kids
                    </label>
                  </div>

        </div >


        <div className='h-[110px] w-[200px] border border-slate-200 p-2 mt-5'>
          <p className='text-2xl font-bold'>Search</p>
          <input className='h-[30px] w-[160px] border border-slate-200 mt-2' type="text" name="Search" id="Search" placeholder='Search Products....' />
        </div>


        {/* Sub Category--- */}
        <div>
          <div className='border border-slate-200  h-[170px] w-[200px] p-3 mt-4'>
            <div>
              <h1 className='font-bold text-xl text-black'>SUB-CATEGORIES</h1>
            </div>

            <div className='flex flex-col gap-3 my-3'>
              <label htmlFor="TopWear">
                <input type="checkbox" name="TopWear" id="TopWear" /> TopWear
              </label>
              <label htmlFor="BottomWear">
                <input type="checkbox" name="BottomWear" id="BottomWear" /> BottomWear
              </label>
              <label htmlFor="WinterWear">
                <input type="checkbox" name="WinterWear" id="WinterWear" /> WinterWear
              </label>
            </div>

          </div >
        </div>
      </div>


      <div className=' flex flex-col  flex-wrap  items-center justify-center left-[210px] absolute '>
        <div className='my-4 flex flex-col items-center justify-center'>
          <Title A1='All' A2='Products' />
        </div>

        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {
            products.map((obj, index) => (<ProductItem className='flex flex-col flex-wrap gap-5'
              key={index}
              img={obj.image[0]}
              name={obj.name}
              price={obj.price} />))
          }
        </div>
      </div>
    </div>

  )
}

export default AllProducts