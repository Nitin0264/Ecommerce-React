import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../userContext/UserContext'

function Product() {
  let {pid} = useParams()
  let {products} = useContext(userContext)
  let [size,setSize]= useState()
  let [product1,setProduct1] = useState()
  let [image,setImage] = useState()
 
  useEffect(()=>{
    let product = products.find(p=> p._id === pid)
    let size1= product.sizes
    let image1 = product.image
    setProduct1(product)
    setSize(size1)
    setImage(image1)

  
  },[products,pid])

  if(!product1){
   return <div className="text-center mt-10">Loading product details...</div>
  }
  return (
    <div className='flex w-[96%] mx-auto gap-[30px] bg-cyan-100 p-7'>
      {/* image section */}
      <div className='flex-1'>
        <div className='w-[100%] flex gap-4'>
        <div className='w-[17%] flex flex-col gap-[15px]'>
            {
              image.map((value,index)=> <div key={index} className=''>
                <img src={value} alt="BestSeller" />
              </div>)
            }
        </div>

        <div>
          </div>
        <img  className='h-[500px]' src={product1.image[0]} alt={product1.name}  />

        </div>
      </div>

{/* 2nd section */}
      <div className='flex flex-1 flex-col items-center justify-center gap-2'>
      <h1>{product1.name}</h1>
      <h1 className='font-bold'>${product1.price}</h1>
      {/* <h1>{product1.category}</h1> */}
      <h1 className='text-center '>{product1.description}</h1>
      {/* the size section */}
      <div className='flex gap-4 my-3'>
       {
         size.map((value,index)=> <div key={index} className='h-[28px] w-[39px] border border-amber-400 shadow-md  flex gap-4 items-center justify-center'>
          <h1>{value}</h1>
         </div>)
       }
       {/* button part */}
      </div>
        <button  className='my-3 w-[120px] h-[35px] bg-emerald-700 text-white'>Add To cart</button>


       <ul className='font-semibold gap-4  flex flex-col mt-6 list-disc '>
        <li>Unmatched Comfort: Crafted with soft, breathable fabrics that feel luxurious against your skin all day long.</li>
       <li>Timeless Style: Versatile designs that elevate your everyday look, blending modern trends with lasting elegance. </li>
        <li>Superior Durability: Expertly tailored with high-quality materials to ensure your favorites last, wash after wash.</li>
        <li>Confident Fit: Precision-cut for the perfect silhouette, designed to make you look and feel your 
       </li>
       </ul>
      </div>
    </div>
  )
}

export default Product