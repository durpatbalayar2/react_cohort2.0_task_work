import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const localData = JSON.parse(localStorage.getItem("localUsers")) || [];
  const [allUsers, setAllUsers] = useState(localData);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [photo, setPhoto] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let collectUsers = {
      name,
      email,
      password,
      contact,
      photo,
    };

    let updatedUsers = [...allUsers, collectUsers];

    setAllUsers(updatedUsers);

    localStorage.setItem("localUsers", JSON.stringify(updatedUsers));

    setName("");
    setEmail("");
    setPassword("");
    setContact("");
    setPhoto("");
  };

  const removeHandler = (idx) => {
    const copyUsers = [...allUsers];

    let message = confirm("Are you really want to delete?");
    if (message) {
      copyUsers.splice(idx, 1);
    }

    setAllUsers(copyUsers);
    localStorage.setItem("localUsers", JSON.stringify(copyUsers));
  };
  return (
    <div className="bg-gray-700 min-h-screen w-full">
      <div className="h-full w-full    flex flex-col  lg:flex-row ">
        <div className=" w-[90%]  lg:w-2/5  bg-[#00000095]  rounded-2xl pb-8 m-4 ">
          <h1 className=" text-center text-white mt-3 font-bold text-4xl lg:text-4xl uppercase">
            Form Filling
          </h1>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="flex flex-col    px-8 mt-6 gap-4">
              <div className="flex flex-col ">
                <label
                  className="text-xl lg:text-2xl font-semibold text-white  "
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter your name"
                  required
                  className="  bg-amber-100 text-xl lg:text-2xl px-2 py-2  mt-3 rounded-2xl text-black outline-none"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="text-xl lg:text-2xl font-semibold text-white  "
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  placeholder="Enter your gmail"
                  required
                  className=" bg-amber-100 text-xl lg:text-2xl px-2 py-2  mt-3 rounded-2xl text-black outline-none"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="text-xl lg:text-2xl font-semibold text-white  "
                  htmlFor="pass"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className=" bg-amber-100 text-xl lg:text-2xl px-2 py-2  mt-3 rounded-2xl text-black outline-none"
                />
              </div>
              <div className="flex flex-col  ">
                <label
                  className="text-xl lg:text-2xl font-semibold text-white  "
                  htmlFor="contact"
                >
                  Contact:
                </label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className=" bg-amber-100 text-xl lg:text-2xl px-2 py-2  mt-3 rounded-2xl text-black outline-none"
                />
              </div>

              <div className="flex flex-col  ">
                <label
                  className="text-xl lg:text-2xl font-semibold text-white  "
                  htmlFor="photo"
                >
                  Photo:
                </label>
                <input
                  type="text"
                  id="photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Enter your image url"
                  required
                  className=" bg-amber-100 text-xl lg:text-2xl px-2 py-2  mt-3 rounded-2xl text-black outline-none"
                />
              </div>
            </div>

            <div className="flex justify-center mt-5 ">
              <button
                type="submit"
                className="    text-2xl px-7 py-3 lg:w-[80%] bg-green-400  rounded-2xl transition-all ease-linear active:scale-95 "
              >
                Add New User
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-8 w-[90%]  bg-gray-500 m-4 rounded-2xl px-3 py-3">
          {/* Card */}
          {allUsers.map(function (elem, idx) {
            return (
              <Card
                key={idx}
                users={elem}
                removeBtn={removeHandler}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
