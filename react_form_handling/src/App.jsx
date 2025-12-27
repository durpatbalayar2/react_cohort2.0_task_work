import { useState } from "react";
import Form from "./components/Form";
import FormCollect from "./components/FormCollect";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="min-h-screen w-full bg-gray-200 px-4 py-3">
      <h1 className="text-center text-2xl md:text-4xl bg-green-300 p-4 rounded-lg font-semibold">
        Form Handling
      </h1>

      <div className="mt-4 flex flex-col md:flex-row gap-10 px-5">
        {/* Left Section */}
        <div className="w-full md:w-1/3 md:h-[70%] bg-gray-400 rounded-lg p-3">
          <h2 className="text-xl md:text-3xl text-center font-semibold mb-3">
            Fill Details
          </h2>
          <Form users={users} setUsers={setUsers} />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 bg-[#555252] rounded-lg   px-2 py-3">
          <h2 className="text-xl md:text-2xl text-white text-center uppercase mb-3">
            All Form Details
          </h2>
          <FormCollect users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
