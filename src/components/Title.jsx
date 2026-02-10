import React from 'react'

function Title({t1,t2,des}) {
  return (
    <>
      <h1 className='text-3xl not-last-of-type:'>{t1} <span className="font-bold">{t2}</span></h1>
      <p className='text-xl'>{des}</p>
    </>
  )
}

export default Title