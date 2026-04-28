import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className ='h-11 w-[95%] mx-auto'>
      <div className = 'flex justify-between items-center'>
      <div className = ''>
        <img className ='h-10' src="src\assets\frontend_assets\logo.png" alt="" />
      </div >
      <div className = 'flex  gap-5'>
        <NavLink to ="/" className =''>Home</NavLink>
        <NavLink to ="/Collection" className =''>Collection </NavLink>
        <NavLink to = "/About" className = ''>About</NavLink>
        <NavLink to = "/Contact" className = ''>Contact</NavLink>
      </div>
      <div className = 'flex gap-3'>
        <img className = 'h-4 ' src="src\assets\frontend_assets\search_icon.png" alt="search bar" />
        <img className = 'h-4' src="src\assets\frontend_assets\cart_icon.png" alt="" />
      </div>
      </div>
     </div>
  )
}

export default Navbar