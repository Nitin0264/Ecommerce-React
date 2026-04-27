import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Checkout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <nav className="flex flex-col gap-4">
          <NavLink to="/Additems" className={({isActive}) => isActive ? "text-yellow-400" : ""}>
            Add Items
          </NavLink>
          <NavLink to="/ListItems" className={({isActive}) => isActive ? "text-yellow-400" : ""}>
            List Items
          </NavLink>
          <NavLink to="/Orderitems" className={({isActive}) => isActive ? "text-yellow-400" : ""}>
            Order sitems
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-10 bg-white">
        <Outlet /> 
      </main>
    </div>
  )
}

export default Checkout