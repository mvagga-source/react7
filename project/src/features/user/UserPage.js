import { useEffect, useState, useContext } from "react";
import { getUsers } from "./userApi";
import { AuthContext } from "../../context/AuthContext";

const UserPage = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(err => alert(err.response.data)); 
  }, []);

  const { user } = useContext(AuthContext);

  return (
      <div>
        {user ? `${user.name}님 환영합니다` : "로그인"}

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