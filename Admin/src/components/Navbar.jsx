import React from 'react'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-white border-b border-gray-200'>
        {/* Replace with your logo image path if you have one, or simple styled text */}
        <div className='flex flex-col'>
          <span className='text-xl font-bold tracking-wider text-black'>CLOTHING STORE</span>
          <span className='text-[10px] text-gray-500 font-semibold tracking-widest text-right -mt-1'>ADMIN PANEL</span>
        </div>
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-black transition duration-200'>
            Logout
        </button>
    </div>
  )
}

export default Navbar