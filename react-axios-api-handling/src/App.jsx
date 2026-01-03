import axios from "axios";
import { useState } from "react";
import User from "./components/User";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getData = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setAllUsers(response.data);
    
  };

  return (
    <div>
      <button onClick={getData} className="btn">
        Get API
      </button>

      <div className="allUser">
        {allUsers.map(function (elem, idx) {
          return (
            <div key={idx}>
              
              <User users={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
