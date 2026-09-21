import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setSizes([])
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3 p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
      <div>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Upload Images</p>
        <div className='flex gap-3'>
          <label htmlFor="image1" className='cursor-pointer'>
            <div className='w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-400 overflow-hidden bg-gray-50 hover:bg-gray-100'>
              {image1 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image1)} alt="" /> : "Upload 1"}
            </div>
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2" className='cursor-pointer'>
            <div className='w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-400 overflow-hidden bg-gray-50 hover:bg-gray-100'>
              {image2 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image2)} alt="" /> : "Upload 2"}
            </div>
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3" className='cursor-pointer'>
            <div className='w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-400 overflow-hidden bg-gray-50 hover:bg-gray-100'>
              {image3 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image3)} alt="" /> : "Upload 3"}
            </div>
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4" className='cursor-pointer'>
            <div className='w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-400 overflow-hidden bg-gray-50 hover:bg-gray-100'>
              {image4 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image4)} alt="" /> : "Upload 4"}
            </div>
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='w-full max-w-md'>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none' type="text" placeholder='Type item title here' required />
      </div>

      <div className='w-full max-w-md'>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none' rows={3} placeholder='Write description content here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
        <div>
          <p className='mb-2 text-sm font-semibold text-gray-700'>Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='px-3 py-2 border border-gray-300 rounded-md outline-none bg-white'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2 text-sm font-semibold text-gray-700'>Sub category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className='px-3 py-2 border border-gray-300 rounded-md outline-none bg-white'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2 text-sm font-semibold text-gray-700'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full sm:w-28 px-3 py-2 border border-gray-300 rounded-md outline-none' type="number" placeholder='25' required />
        </div>
      </div>

      <div>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Product Sizes</p>
        <div className='flex gap-3'>
          {['S', 'M', 'L', 'XL', 'XXL'].map((item) => (
            <div
              key={item}
              onClick={() => setSizes(prev => prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item])}
              className={`px-3 py-1 cursor-pointer rounded-md font-semibold text-sm transition ${sizes.includes(item) ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-2 mt-2 items-center'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' className='w-4 h-4 cursor-pointer' />
        <label className='text-sm text-gray-700 font-medium cursor-pointer' htmlFor="bestseller">Add to Bestseller Collection</label>
      </div>

      <button type="submit" className='w-36 py-3 mt-4 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition'>ADD PRODUCT</button>
    </form>
  )
}

export default Add