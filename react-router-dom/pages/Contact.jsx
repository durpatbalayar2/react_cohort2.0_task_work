import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className=" mt-5 text-center ">
      <h1 className="text-6xl mb-5">Contact</h1>

      <button
        onClick={() => navigate("form")}
        className="text-xl bg-black rounded-2xl text-white px-4 py-2 m-3"
      >
        Goto Form
      </button>
      <button
        onClick={() => navigate("info")}
        className="text-xl bg-black rounded-2xl text-white px-4 py-2"
      >
        Goto Info
      </button>
    </div>
  );
};

export default Contact;
