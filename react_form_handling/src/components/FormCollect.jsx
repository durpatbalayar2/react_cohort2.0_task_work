import Card from "./Card";

const FormCollect = ({users}) => {
  return (
    <div className="flex flex-wrap gap-4 px-2 py-2 ">
     {users.map(function(user,idx){

      return <Card key={idx} user={user} />;

     })}
    </div>
  );
};

export default FormCollect;
