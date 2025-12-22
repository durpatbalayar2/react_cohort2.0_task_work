const Text = ({title}) => {
  return (
    <div className="  text-white  bg-[#504c4c70]  rounded-2xl  h-60  ">
      <div>
        <h1 className="  uppercase text-2xl p-6  ">{title}</h1>
        <div className="flex px-5 gap-7 items-end mt-3">
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            magnam sunt, dolorem impedit facere earum.
          </p>

          <h2 className="rounded border-2 border-white px-5 py-3 text-xl">
            Explore
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Text;
