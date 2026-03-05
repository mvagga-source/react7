import { useEffect, useState } from "react";
import { getUsers } from "./userApi";

const UserPage = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(err => alert(err.response.data)); 
  }, []);

  return (
    <div>
      <h1>React + Axios 공통 폴더 테스트</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.id} - {user.name}- {user.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;