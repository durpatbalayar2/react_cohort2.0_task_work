import { useState } from "react";

// Give Grace
const App = () => {
  const [marks, setMarks] = useState([20, 90, 10, 40, 25]);

  function handleBtn() {
    let newMarks = marks.map(function (elem) {
      if (elem >= 100) {
        return elem;
      } else return elem + 5;
    });
    setMarks(newMarks);
  }

  return (
    <div className=" mt-10 ml-50">
      {marks.map(function (elem, idx) {
        return (
          <h1 key={idx} className="text-2xl">
            Student {idx + 1} ={elem}
            <span className="px-7"
              style={{
                color: elem >= 100 ? "blue" : elem >= 30 ? "green" : "red",
              }}
            >
              {elem >= 30 ? "Pass" : "Fail"}
            </span>
          </h1>
        );
      })}

      <button
        onClick={handleBtn}
        className="bg-gray-500 px-4 py-3 rounded-lg mt-4 text-xl active:scale-[0.9]"
      >
        Give Grace
      </button>
    </div>
  );
};

export default App;
