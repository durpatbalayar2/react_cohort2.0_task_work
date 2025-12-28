

const Card = ({users,removeBtn,index}) => {
  return (
    <div>
      <div className="   w-70 bg-white rounded-lg   ">
        <div className="flex flex-col items-center gap-1.5 py-3 ">
          <div className="w-30 h-30  rounded-full overflow-hidden ">
            <img
              className="w-full h-full object-cover object-center"
              src={users.photo}
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold ">{users.name}</h1>

          <h5 className="text-xl">{users.email}</h5>

          <h6 className="text-[22px]">
            Pass: <span>{users.password}</span>
          </h6>
          <h3 className="text-xl">
            Phone: <span>{users.contact}</span>
          </h3>

          <button onClick={()=>removeBtn(index)} className="bg-red-500 text-white px-3 py-2 text-xl rounded-lg">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card