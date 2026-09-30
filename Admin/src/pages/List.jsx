import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ token, backendUrl }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`)
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error("Error fetching product list")
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      )
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error("Error deleting product")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='flex flex-col gap-2 p-4'>
      <p className='mb-2 font-bold text-lg'>All Products List</p>
      
      {/* Table Header */}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 border bg-gray-100 text-sm font-semibold'>
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className='text-center'>Action</span>
      </div>

      {/* Product Items */}
      {list.map((item, index) => (
        <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-4 border text-sm'>
          <img className='w-12 h-12 object-cover rounded' src={item.image[0]} alt={item.name} />
          <p>{item.name}</p>
          <p className='hidden md:block'>{item.category}</p>
          <p>${item.price}</p>
          <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-red-600 font-bold hover:underline'>
            X
          </p>
        </div>
      ))}
    </div>
  )
}

export default List