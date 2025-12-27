
import { useState } from "react";
import Form from "./components/Form";
import FormCollect from "./components/FormCollect";

const App = () => {

  const [users, setUsers] = useState([]); 

  return (
    <div className=" flex flex-col   h-screen w-full bg-gray-200 px-4 py-2 ">
      <h1 className=" w-full text-center text-4xl  bg-green-300 p-4  rounded-lg  ">
        Form Handling
      </h1>

      <div className="h-full w-full flex justify-between gap-2">
        <div className="w-1/3 h-full bg-gray-400 mt-2 rounded-lg ">
          <h1 className="text-3xl text-center  font-semibold p-3">
            Fill Details
          </h1>

          <Form users={users} setUsers={setUsers}/>

        </div>
        <div className="w-[80%] h-full bg-[#555252] mt-2 rounded-lg">
          <h1 className="text-2xl text-white text-center p-2 uppercase">All Form Details</h1>
         <FormCollect users={users}/>
      
        </div>
      </div>
    </div>
  );
};

export default App;
