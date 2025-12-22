

const Page3_Card = ({degination,total}) => {
  return (
    <div className='   flex items-center flex-col justify-center gap-2 '>
        <p className='uppercase text-sm text-[#ffffffa1] '>{degination}</p>
        <h1 className='text-5xl text-white'>{total}</h1>
    </div>
  )
}

export default Page3_Card