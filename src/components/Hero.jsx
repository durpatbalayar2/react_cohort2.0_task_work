import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-[url("https://i.pinimg.com/1200x/32/42/de/3242de16c5c74ee8dc15eeacadfb28bb.jpg")] bg-cover bg-center'>
      <h1 className="   text-8xl uppercase flex items-center  px-20 text-white pt-40 tracking-wide">
        Design <br /> & Freedom
      </h1>

      <div className="flex justify-around items-center gap-20 text-white text-xl py-50">
        <p className='w-1/3 '>
          Explore Independent Style by Embracing Uniqueness with Our Exclusive
          Designer Apparel
        </p>
        <button className='rounded border-2 border-white p-3 text-2xl uppercase'>Learn More</button>
      </div>
    </div>
  );
}

export default Hero