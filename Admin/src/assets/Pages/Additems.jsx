import React from 'react'

function Additems() {
  return (
    <div>
    <div>
    <div className='Imaages h-[45px] w-[100px] flex p-3 gap-5 my-4'>
      <img  src="" alt="add soon " />
      <img  src="" alt="add soon " />
      <img  src="" alt="add soon " />
      <img  src="" alt="add soon " />
    </div>
     {/* product name */}
    <div className='flex flex-col gap-2'>
      <h1>Product Name</h1>
      <input className='h-[39px] w-[600px]' type="search" name="" id="" placeholder='type here' />
    </div>
    <div>
      <h1>Product Discription</h1>
        <input className='h-[110px] w-[600px]' type="text" name="" id=""  placeholder='Type here '/>
    </div>
    <div className=' flex flex-col'>
      <div className='flex gap-5'>
        <h1>product category</h1>
        <h1>product sub-category</h1>
        <h1>product price</h1>
      </div>
      <div className='flex gap-5 '>
        <select value="">
          <option name="men" id="">men</option>
          <option name="women" id="">women</option>
          <option name="kids" id="">kids</option>
        </select>

        <select value="">
          <option name="topwear" id="">topwear</option>
          <option name="winter" id="">winter</option>
          <option name="saree" id="">saree</option>
        </select>
         <input className='h-[35px] w-[130px]' type="number" name="" id="" />
      </div>
    </div>
    <div>
      <h1>Sizes</h1>
       
    </div>
      </div>
    </div>
  )
}

export default Additems