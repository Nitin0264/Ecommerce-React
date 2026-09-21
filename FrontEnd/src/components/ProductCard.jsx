import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, price }) => {
  return (
    <Link 
      to={`/products/${id}`} 
      className='text-gray-700 cursor-pointer group'
    >
      {/* Image Container with Hover Effect */}
      <div className='overflow-hidden bg-gray-100 rounded-lg aspect-square'>
        <img 
          src={image[0]} 
          alt={name} 
          className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300' 
        />
      </div>
      
      {/* Product Details */}
      <p className='pt-3 pb-1 text-sm font-medium limit-lines'>{name}</p>
      <p className='text-sm font-semibold text-black'>${price}</p>
    </Link>
  );
};

export default ProductCard;