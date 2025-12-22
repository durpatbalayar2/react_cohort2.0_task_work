

const Card = ({title,desc}) => {
  return (
    <div className="w-80 h-60 bg-[#171616] text-white flex  flex-col p-8 gap-3 rounded-lg">
      <h1 className="uppercase text-2xl">{title}</h1>
      <p className="text-[18px]">
        {desc}
      </p>

      <div>
        <h1 className="uppercase">learn more </h1>
      </div>
    </div>
  );
}

export default Card