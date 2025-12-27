import { useState } from "react";

const Form = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      Name: name,
      Email: email,
      Phone: contact,
      Age: age,
      Gender: gender,
      Photo: photo,
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setContact("");
    setAge("");
    setGender("");
    setPhoto("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 px-3 sm:px-6 relative"
    >
     
      <label className="text-lg sm:text-2xl">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full text-base sm:text-xl bg-gray-300 px-3 py-2 rounded-lg outline-none"
        required
      />

     
      <label className="text-lg sm:text-2xl">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full text-base sm:text-xl bg-gray-300 px-3 py-2 rounded-lg outline-none"
        required
      />

     
      <label className="text-lg sm:text-2xl">Contact</label>
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Enter your number"
        className="w-full text-base sm:text-xl bg-gray-300 px-3 py-2 rounded-lg outline-none"
        required
      />

    
      <label className="text-lg sm:text-2xl">Age</label>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
        className="w-full text-base sm:text-xl bg-gray-300 px-3 py-2 rounded-lg outline-none"
        required
      />

      
      <div>
        <h2 className="text-lg sm:text-2xl mb-1">Gender</h2>
        <div className="flex gap-4 flex-wrap">
          {["Male", "Female", "Other"].map((g) => (
            <label key={g} className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={gender === g}
                onChange={(e) => setGender(e.target.value)}
                className="scale-125 sm:scale-150"
                required
              />
              <span className="text-base sm:text-xl">{g}</span>
            </label>
          ))}
        </div>
      </div>

     
      <label className="text-xl sm:text-2xl">Photo URL</label>
      <input
        type="text"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        placeholder="Enter image url"
        className="w-full text-base sm:text-xl bg-gray-300 px-3 py-2 rounded-lg outline-none"
        required
      />

     
      <button
        type="submit"
        className="bg-green-400 text-lg sm:text-xl px-6 py-2 rounded-lg mt-4 self-center hover:bg-green-500"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
