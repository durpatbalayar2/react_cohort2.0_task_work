import React from 'react'

const Image = ({img}) => {
  return (
    <div className="w-1/2 ">
    
        <img
          className=" w-full  h-110 rounded-2xl object-cover   "
          src={img}
          alt=""
        />
      </div>
  
  );
}

export default Image