

const Navbar = () => {
  return (
    <div className="  w-full flex justify-between  items-center  px-10 py-6 ">
      <div className="text-2xl   font-bold ">
        <h1 className="text-white">DSVY</h1>
      </div>

      <div className="flex gap-15 text-xl uppercase ">
        <h1 className="bg-[#00000045] p-3 rounded text-white">Designs</h1>
        <h1 className="bg-[#0000004a] p-3 rounded text-white">Collabs</h1>
        <h1 className="bg-[#00000027] p-3 rounded text-white">Events</h1>
        <h1 className="bg-[#0000003b] p-3 rounded text-white">Blog</h1>
        <h1 className="bg-[#00000045] p-3 rounded text-white">Card</h1>
      </div>

      <div className="text-xl  uppercase border border-black px-3 py-2 rounded-md bg-[#f36f6f]">
        <h1>Get in touch</h1>
      </div>
    </div>
  );
}

export default Navbar