import React from "react";

const Page4 = () => {
  return (
    <div className="w-full  flex items-center justify-between  gap-5 px-5 py-15 text-white">
      <div className="bg-[#000a] w-1/2 h-120 p-8 flex  flex-col gap-8 rounded-3xl  pt-10">
        <h5 className="text-xl uppercase font-bold">About</h5>
        <h1 className="font-bold text-5xl">Where Fashion Meets Freedom</h1>

        <div className="flex gap-5  items-center justify-center text-[18px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            corrupti dolorum facere vel, hic, voluptatibus labore architecto
            recusandae odio odit consectetur dolorem repudiandae voluptatem
            aperiam culpa et ipsum voluptates magnam!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            possimus autem, dolorem inventore itaque, nesciunt ipsa fugiat
            architecto earum totam iusto veniam? Illo cumque eaque
            exercitationem velit amet voluptatum eos?
          </p>
        </div>
      </div>

      <div className=" w-1/2    ">
        <img className=" w-full  h-120 rounded-2xl object-cover   "
          src="https://images.unsplash.com/photo-1609519160182-2c2f387fb81e?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page4;
