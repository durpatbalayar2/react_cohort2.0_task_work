import Card from "./Card";

const FormCollect = ({ users }) => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-2 ">
      {users.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </div>
  );
};

export default FormCollect;
