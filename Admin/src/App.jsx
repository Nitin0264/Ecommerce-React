  import React from 'react'
  import Checkout from './assets/Components/Checkout'
  import { Route,Router, Routes } from 'react-router-dom'
  import Additems from './assets/Pages/Additems'
  import ListItems from './assets/Pages/ListItems'
  import Orderitems from './assets/Pages/Orderitems'

  function App() {
    return (
      <div>
        <Routes>
            <Route path='/' element={<Checkout />}>
            <Route path="/Additems" element={<Additems />} />
            <Route path="/ListItems" element={<ListItems />} />
            <Route path='/Orderitems' element={<Orderitems />} />
            </Route>
            
          </Routes>
      </div>
    )
  }

  export default App