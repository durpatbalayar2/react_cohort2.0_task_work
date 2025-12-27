import Card from "./Card";

const FormCollect = ({ users }) => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4  ">
      {users.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </div>
  );
};

export default FormCollect;
