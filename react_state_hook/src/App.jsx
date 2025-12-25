import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleIncrease = () => {
    if (intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 300);

    setIntervalId(id);
  };
  const handleDecrease = () => {
    if (intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      setNum((prev) => prev - 1);
    }, 300);

    setIntervalId(id);
  };

  const handleStop= ()=>{
    if(intervalId){
      clearInterval(intervalId)
      setInterval(null)
    }
  }

  return (
    <div className=" flex  items-center justify-center  bg-black h-screen ">
      <div className=" flex  items-center flex-col  justify-center   h-1/2 w-1/2 bg-blue-50 rounded-2xl gap-4 text-xl">
        Min-Track
        <div className="px-35 py-10 bg-blue-300  rounded m-4 text-8xl text-center">
          {num}
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleIncrease()}
            className="bg-green-300 text-xl px-5 py-2 rounded active:scale-[0.95] "
          >
            Increase
          </button>
          <button
            onClick={handleDecrease}
            className="bg-red-500 text-xl px-5 py-2 rounded active:scale-[0.95] "
          >
            Decrease
          </button>

          <button
            onClick={handleStop}
            className="bg-yellow-500 text-xl px-5 py-2 rounded active:scale-[0.95] "
          >Stop</button>
        </div>
      </div>
    </div>
  );
};

export default App;
