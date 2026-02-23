import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import { userContext } from '../userContext/UserContext'

function AllProducts() {
  const { products } = useContext(userContext)
  
  const [cate, setCate] = useState([])         
  const [subCate, setSubCate] = useState([])   
  const [search, setSearch] = useState('')    
  const [filterProducts, setFilterProducts] = useState([]) 


  const toggleCate = (e) => {
    const value = e.target.value;
    setCate(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  }

  const toggleSubCate = (e) => {
    const value = e.target.value;
    setSubCate(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  }

  useEffect(() => {
    let tempProducts = [...products];

   

    if (search) {
      tempProducts = tempProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }

  
    if (cate.length > 0) {
      tempProducts = tempProducts.filter(p => cate.includes(p.category));
    }

  
    if (subCate.length > 0) {
      tempProducts = tempProducts.filter(p => subCate.includes(p.subCategory));
    }

    setFilterProducts(tempProducts);
  }, [cate, subCate, search, products]); 


  return (
    <div className='flex relative flex-wrap '>
      {/* SIDEBAR */}
      <div className='my-13 fixed w-[200px]'>
        <button className='h-11 w-[170px] text-white font-semibold bg-black rounded-xl mb-5'>Filter</button>
        
        {/* Categories Section */}
        <div className='border border-gray-100 p-3'>
          <h1 className='font-bold text-xl text-black'>CATEGORIES</h1>
          <div className='flex flex-col gap-3 my-3'>
            <label className='flex gap-2'><input type="checkbox" value="Men" onChange={toggleCate} /> Men</label>
            <label className='flex gap-2'><input type="checkbox" value="Women" onChange={toggleCate} /> Women</label>
            <label className='flex gap-2'><input type="checkbox" value="Kids" onChange={toggleCate} /> Kids</label>
          </div>
        </div>

        {/* Search Section */}
        <div className='border border-slate-200 p-3 mt-5'>
          <p className='text-xl font-bold'>Search</p>
          <input 
            className='h-[30px] w-full border border-slate-200 mt-2 px-2' 
            type="text" 
            placeholder='Search...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Direct state update
          />
        </div>

        {/* Sub Categories Section */}
        <div className='border border-slate-200 p-3 mt-4'>
          <h1 className='font-bold text-xl text-black'>SUB-CATEGORIES</h1>
          <div className='flex flex-col gap-3 my-3'>
            <label className='flex gap-2'><input type="checkbox" value='Topwear' onChange={toggleSubCate} /> TopWear</label>
            <label className='flex gap-2'><input type="checkbox" value='Bottomwear' onChange={toggleSubCate} /> BottomWear</label>
            <label className='flex gap-2'><input type="checkbox" value='Winterwear' onChange={toggleSubCate} /> WinterWear</label>
          </div>
        </div>
      </div>

      {/* PRODUCT DISPLAY AREA */}
      <div className='flex flex-col items-center justify-center left-[210px] absolute w-[calc(100%-250px)]'>
        <div className='my-4'>
          <Title A1='All' A2='Products' />
        </div>

        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {filterProducts.length > 0 ? (
            filterProducts.map((obj, index) => (
              <ProductItem 
                key={index}
                img={obj.image[0]}
                name={obj.name}
                price={obj.price} 
                id={obj._id}
              />
            ))
          ) : (
            <p className='text-gray-500 mt-10'>No products found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllProducts;