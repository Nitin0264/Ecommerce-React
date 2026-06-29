import React, { useState } from 'react';
import { LuUpload } from 'react-icons/lu';

const Add = () => {
  
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // --- 2. Toggle Size Selection ---
  const toggleSize = (size) => {
    setSizes(prev => 
      prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]
    );
  };

  // --- 3. Form Submit Handler ---
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Temporary log to check your state values before connecting the backend
    console.log({ name, description, price, category, subCategory, bestseller, sizes, images: [image1, image2, image3, image4] });
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4 p-8 text-gray-600 max-w-4xl'>
      
      {/* --- Upload Images Section --- */}
      <div>
        <p className='mb-2 font-medium'>Upload Images</p>
        <div className='flex gap-2'>
          {[
            { id: 1, state: image1, setState: setImage1 },
            { id: 2, state: image2, setState: setImage2 },
            { id: 3, state: image3, setState: setImage3 },
            { id: 4, state: image4, setState: setImage4 },
          ].map((img) => (
            <label key={img.id} htmlFor={`image${img.id}`} className='cursor-pointer'>
              <div className='w-24 h-24 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-gray-400 transition-colors bg-gray-50'>
                {img.state ? (
                  <img className='w-full h-full object-cover' src={URL.createObjectURL(img.state)} alt="" />
                ) : (
                  <>
                    <LuUpload className='text-xl text-gray-500' />
                    <span className='text-xs'>Upload</span>
                  </>
                )}
              </div>
              <input 
                onChange={(e) => img.setState(e.target.files[0])} 
                type="file" 
                id={`image${img.id}`} 
                hidden 
                accept="image/*"
              />
            </label>
          ))}
        </div>
      </div>

      {/* --- Product Name --- */}
      <div className='w-full'>
        <p className='mb-2 font-medium'>Product Name</p>
        <input 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          className='w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black' 
          type="text" 
          placeholder='Type here' 
          required 
        />
      </div>

      {/* --- Product Description --- */}
      <div className='w-full'>
        <p className='mb-2 font-medium'>Product Description</p>
        <textarea 
          onChange={(e) => setDescription(e.target.value)} 
          value={description} 
          className='w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black' 
          placeholder='Type here' 
          rows={4} 
          required 
        />
      </div>

      {/* --- Category, Sub-Category, Price Row --- */}
      <div className='flex flex-col sm:flex-row gap-4 w-full text-sm'>
        <div>
          <p className='mb-2 font-medium'>Product Category</p>
          <select 
            onChange={(e) => setCategory(e.target.value)} 
            className='w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none'
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2 font-medium'>Product Sub-Category</p>
          <select 
            onChange={(e) => setSubCategory(e.target.value)} 
            className='w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none'
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2 font-medium'>Product Price</p>
          <input 
            onChange={(e) => setPrice(e.target.value)} 
            value={price} 
            className='w-full px-3 py-2 border border-gray-300 rounded sm:w-[120px] focus:outline-none focus:border-black' 
            type="Number" 
            placeholder='0' 
            required 
          />
        </div>
      </div>

      {/* --- Product Sizes --- */}
      <div>
        <p className='mb-2 font-medium'>Product Sizes</p>
        <div className='flex gap-3'>
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div 
              key={size} 
              onClick={() => toggleSize(size)} 
              className={`px-4 py-2 cursor-pointer border rounded transition-all font-medium ${
                sizes.includes(size) ? "bg-black text-white border-black" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* --- Add to Bestseller Checkbox --- */}
      <div className='flex gap-2 mt-2 items-center cursor-pointer select-none'>
        <input 
          type="checkbox" 
          id='bestseller' 
          onChange={() => setBestseller(prev => !prev)} 
          checked={bestseller} 
          className='w-4 h-4 accent-black'
        />
        <label htmlFor="bestseller" className='font-medium cursor-pointer'>Add to bestseller</label>
      </div>

      {/* --- Submit Button --- */}
      <button type="submit" className='w-40 py-3 mt-4 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors active:bg-gray-900'>
        Add
      </button>

    </form>
  );
};

export default Add;