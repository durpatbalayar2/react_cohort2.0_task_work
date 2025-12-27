import { useState } from "react";

const Form = ({ users, setUsers }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState("");

  //User Data Store
  // const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      Name: name,
      Email: email,
      Phone: contact,
      Age: age,
      Photo: photo,
      Gender: gender,
    };

    // const OldUserData = [...userData];
    // OldUserData.push(name);
    // console.log(OldUserData)
    // setUserData(OldUserData);

    //Shortcut
    // setUserData([...userData, name]);

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setContact("");
    setAge("");
    setPhoto("");
    setGender("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className=" relative flex flex-col   px-6 gap-2"
      >
        <label htmlFor="name" className="text-2xl px-1 ">
          Name:
        </label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className=" w-[80%] text-xl bg-gray-300 px-3  py-1 rounded-lg outline-none"
        />

        <label htmlFor="email" className="text-2xl px-1 ">
          Email:
        </label>

        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className=" w-[80%] text-xl bg-gray-300 px-3  py-1 rounded-lg outline-none"
        />

        <label htmlFor="contact" className="text-2xl px-1 ">
          Contact:
        </label>

        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className=" w-[80%] text-xl bg-gray-300 px-3  py-1 rounded-lg outline-none"
          placeholder="Enter your number"
        />

        <label htmlFor="age" className="text-2xl px-1 ">
          Age:
        </label>

        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          placeholder="Enter your age"
          className=" w-[80%] text-xl bg-gray-300 px-3  py-1 rounded-lg outline-none"
        />

        <div className="px-1 ">
          <h1 className="text-2xl">Gender:</h1>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender == "Male"}
              onChange={(e) => setGender(e.target.value)}
              required
              className="scale-150"
            />
            <span className="px-2 text-xl">Male</span>
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender == "Female"}
              onChange={(e) => setGender(e.target.value)}
              required
              className="scale-150"
            />
            <span className="px-2 text-xl">Female</span>
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={gender == "Other"}
              required
              onChange={(e) => setGender(e.target.value)}
              className="scale-150"
            />
            <span className="px-2 text-xl">Other</span>
          </label>
        </div>

        <label htmlFor="photo" className="text-2xl px-1 ">
          Photo URL
        </label>
        <input
          type="text"
          id="age"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
          placeholder="Enter image url"
          className=" w-[80%] text-xl bg-gray-300 px-3  py-1 rounded-lg outline-none"
        />

        <button
          type="submit"
          className="bg-green-400 w-fit  px-6 py-2 rounded-lg text-xl absolute bottom-[-18%]
            left-[50%]
            -translate-x-1/2
            -translate-y-1/2
             "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
