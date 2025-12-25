const Card = ({
  name,
  desc,
  like,
  post,
  view,
  profileImg,
  coverImg,
  isfollow,
}) => {
  return (
    <div className="w-80 h-110 bg-amber-100 rounded-2xl overflow-hidden relative">
      <div className="top   w-full h-[30%]">
        <div className="w-full h-full">
          <img className="w-full h-full object-cover" src={coverImg} alt="" />
        </div>
      </div>
      <div className="   w-full h-[70%] ">
        <div className="content flex flex-col  gap-1.3 pt-15 text-center px-5 gap-1 ">
          <div>
            <h1 className="text-3xl font-bold py-2">{name}</h1>
            <p className="text-[17px]  ">{desc}</p>
          </div>

          <div className=" flex justify-between pt-3  ">
            <div>
              <h4 className="text-2xl font-semibold">{like}</h4>
              <h5 className="text-[18px] opacity-[0.8]">Likes</h5>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">{post}</h4>
              <h5 className="text-[18px] opacity-[0.8]">Posts</h5>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">{view}</h4>
              <h5 className="text-[18px] opacity-[0.8]">Views</h5>
            </div>
          </div>

          <div className="icons flex items-center justify-center gap-5 px-3 pt-4 text-2xl">
            <i class="ri-instagram-fill"></i>
            <i class="ri-facebook-fill"></i>
            <i class="ri-twitter-x-fill"></i>
          </div>
        </div>
      </div>

      <div className=" absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-30 h-30   rounded-[50%] overflow-hidden border-4 border-white">
        <img className="w-full h-full object-cover " src={profileImg} alt="" />
      </div>

      <div className="follow-btn bg-amber-50 h-10 w-30  absolute top-3 right-3 text-center rounded-xl ">
        <h5 className="text-xl px-4 py-1 ">
          {isfollow ? "follow+" : "unfollow"}
        </h5>
      </div>
    </div>
  );
};

export default Card;
