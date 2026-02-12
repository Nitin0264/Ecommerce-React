import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import RelatedProducts from '../components/RelatedProducts'

function Home() {
  return (
    <div className='w-[80%] mx-auto'>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <RelatedProducts />
    </div>
  )
}

export default Home