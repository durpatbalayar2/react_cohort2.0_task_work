const User = ({ users }) => {
     let c1 = Math.floor(Math.random() * 256);
     let c2 = Math.floor(Math.random() * 256);
     let c3 = Math.floor(Math.random() * 256);
  return (
    <div >
      <div
        className="user-card"
        style={{ backgroundColor: `rgb(${c1},${c2},${c3})`, textAlign:"center" }}
      >
        <h3>{users.name}</h3>
        <h4>{users.company.name}</h4>
        <p>{users.website}</p>
        <h4>{users.email}</h4>
        <h6>{users.address.city}</h6>
        

      </div>
    </div>
  );
};

export default User;
