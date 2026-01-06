import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setDesc("");
  };
  return (
    <div className="w-[50%] h-[50%] p-5 shadow-[0px_2px_6px_rgba(0,0,0,0.5)] rounded-3xl ml-100 mt-15 ">
      <h1 className="text-3xl text-center font-bold">Contact Form</h1>

      <form
        className="w-full h-full  flex flex-col gap-5"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="text-xl outline-0 bg-gray-400 px-10 py-3 rounded-lg"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="text-xl outline-0 bg-gray-400 px-10 py-3 rounded-lg"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Enter your email"
        />
        <textarea
          className="text-xl outline-0 bg-gray-400 px-10 py-3 rounded-lg"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
          placeholder="Describe"
        ></textarea>
        <button
          className="text-xl px-4 py-3 rounded-2xl text-white bg-black border-0 outline-0"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
