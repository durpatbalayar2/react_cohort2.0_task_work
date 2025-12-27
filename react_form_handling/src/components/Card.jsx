

const Card = ({user}) => {
  return (
    <div >
      <div className="h-60 w-55 bg-gray-200 rounded-lg flex flex-col  items-center justify-start pt-2  gap-2 ">
        <div className="w-20 h-20 overflow-hidden  border-3 border-white rounded-full">
          <img
            className="h-full w-full rounded-full object-cover"
            src={user.Photo}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-sm ">
            Name: <span className="font-semibold">{user.Name}</span>
          </h1>

          <h1 className="text-sm ">
            Gmail: <span className="font-semibold">{user.Email}</span>
          </h1>

          <h1 className="text-sm ">
            Contact No. : <span className="font-semibold">{user.Phone}</span>
          </h1>

          <h1 className="text-sm ">
            Age: <span className="font-semibold">{user.Age}</span>
          </h1>

          <h1 className="text-sm ">
            Gender: <span className="font-semibold">{user.Gender}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card