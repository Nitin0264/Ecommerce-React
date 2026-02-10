import React, { useContext } from 'react'
import { userContext } from './userContext/UserContext'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
let {name ,products} = useContext(userContext)
  console.log(products)
  return (
    <div className ='w-[80%] mx-auto'>
      <Navbar />
      <Routes>
           <Route path='/' element = {<Home />}   />
           <Route path ='/Collection' element ={<Collection />} />
           <Route path = '/About' element = {<About />}  />
           <Route path = '/Contact' element = {<Contact />}  />

    {/* {console.log(products)} */}
        </Routes>
</div>

  )
}

export default App