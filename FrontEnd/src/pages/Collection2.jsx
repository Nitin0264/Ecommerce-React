import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { toast } from 'react-toastify';

const Collection2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Fetch Products from API ---
  const fetchProducts = async () => {
    try {
      const backendUrl = "http://localhost:8000"; // Pointing to your Express Backend server
      const response = await axios.get(`${backendUrl}/api/product/list`);
      
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center min-h-[40vh] font-medium'>Loading Shop Collection2...</div>;
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Product Display Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <h2 className='text-gray-500 font-light'>ALL <span className='text-gray-800 font-medium'>COLLECTION2S</span></h2>
        </div>

        {/* Dynamic Responsive Product Grid Layout */}
        {products.length === 0 ? (
          <p className='text-gray-500 text-center py-10'>No products found. Add items from the Admin panel!</p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {products.map((item) => (
              <ProductCard 
                key={item._id} 
                id={item._id} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Collection2;