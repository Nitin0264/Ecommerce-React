import React from 'react'
import AllProducts from './AllProducts'
function Filter() {
  return (
    <div>
      <AllProducts />
      {
        document.QuerrySelector('.')
      }
    </div>
  )
}

export default Filter