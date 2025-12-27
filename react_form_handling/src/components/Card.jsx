const Card = ({ user }) => {
  return (
    <div className="bg-gray-200 rounded-lg flex flex-col items-center pt-3 gap-2 w-full sm:w-56">
      <div className="w-20 h-20 overflow-hidden border-2 border-white rounded-full">
        <img
          className="h-full w-full object-cover rounded-full"
          src={user.Photo}
          alt="profile"
        />
      </div>

      <div className="text-sm flex flex-col gap-1">
        <p>
          Name: <span className="font-semibold">{user.Name}</span>
        </p>
        <p>
          Email: <span className="font-semibold">{user.Email}</span>
        </p>
        <p>
          Phone: <span className="font-semibold">{user.Phone}</span>
        </p>
        <p>
          Age: <span className="font-semibold">{user.Age}</span>
        </p>
        <p>
          Gender: <span className="font-semibold">{user.Gender}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
