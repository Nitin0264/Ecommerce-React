import React from 'react'

function Hero() {
  return (
    <div>
      <div className = 'flex w-[100%] h-[440px] mt-2 shadow-lg'>
      <div className = 'w-[50%] h-[90%] flex flex-col items-center justify-center'>
         <p className= 'mt-2 text-xl'>OUR BESTSELLERS</p>
         <p className= 'mt-2 text-3xl'>LATEST ARRIVALS</p>
         <p className= 'mt-2 text-xl'>SHOP NOW</p>


      </div>
      <div className = 'w-[50%] h-[90%]'> 
        <img src="src\assets\frontend_assets\hero_img.png" alt="Hero img" />
      </div>

      </div>
    </div>
  )
}

export default Hero