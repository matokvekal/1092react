import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
debugger
  return (
    <>
      <div>UserList</div>
      <ul>
        {users 
        ?  
        users.map((user,index) => (
          <li key={index}>{user?.name}</li>
        ))
        : 
        <div>loading...</div>}
      </ul>
    </>
  );
};

export default UserList;
