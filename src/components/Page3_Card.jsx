import React from 'react'

const Page3_Card = ({degination,total}) => {
  return (
    <div className='px-4 py-6 flex items-center flex-col '>
        <p className='uppercase text-sm text-[#ffffffa1] '>{degination}</p>
        <h1 className='text-4xl text-white text-center'>{total}</h1>
    </div>
  )
}

export default Page3_Card