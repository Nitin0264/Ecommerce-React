import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-200 bg-white pt-6 flex flex-col gap-2 pl-[2%]'>
        <div className='flex flex-col gap-4 text-[15px] text-gray-700'>
            
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-md hover:bg-gray-50 transition' to="/add">
                <p className='hidden md:block font-medium'>Add Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-md hover:bg-gray-50 transition' to="/list">
                <p className='hidden md:block font-medium'>List Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l-md hover:bg-gray-50 transition' to="/orders">
                <p className='hidden md:block font-medium'>Orders Management</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar