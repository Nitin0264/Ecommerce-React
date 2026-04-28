import React from 'react'

function Title({t1,t2,des,z1,z2,sell,y1,y2,sale,A1,A2}) {
  return (
    <>
      <h1 className='text-3xl :'>{t1} <span className="font-bold">{t2}</span></h1>
      <p className='text-xl'>{des}</p>

      {/* Best Sellers Part */}
      <h1 className='text-3xl :'>{z1} <span className="font-bold">{z2}</span></h1>
      <p className='text-xl'>{sell}</p>
    
      <h1 className='text-3xl :'>{y1} <span className="font-bold">{y2}</span></h1>
      <p className='text-xl'>{sale}</p>

      <h1 className='text-3xl font-semibold'>{A1} <span className='font-bold'>{A2}</span></h1>
       
    
  
    </>
  )
}

export default Title