import React from 'react'

const ContactInfo = () => {
  return (
    <div className="w-[50%] h-[50%] flex flex-col  px-10 py-10 ml-100 mt-10 rounded-4xl shadow-[0px_2px_4px_rgba(0,0,0,0.4)]">
      <h1 className="text-2xl">Contact Info</h1>
      <h4 className="text-xl">
        Company name: <span>Urbanloom</span>
      </h4>
      <h4 className="text-xl">
        Services:
        <span>
          New Trending Outfit including modern & fashion style clothes
        </span>
      </h4>
      <h4 className="text-xl">
        Location : <span>Bengaluru, India</span>
      </h4>
      <h4 className="text-xl">
        Email: <span>www.urbanloon.com</span>
      </h4>
    </div>
  );
}

export default ContactInfo