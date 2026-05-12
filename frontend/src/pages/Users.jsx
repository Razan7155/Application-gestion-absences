import { useEffect, useState } from "react";
import axios from "../services/axios";

function Users() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{

    loadUsers();

  },[]);

  const loadUsers = async()=>{

    const res = await axios.get("/users");

    setUsers(res.data);
  };

  return(

    <div className="page-container">

      <div className="page-content">

        <h1 className="page-title">
          Users Management
        </h1>

        <div className="glass-table">

          <table className="modern-table">

            <thead>

              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
              </tr>

            </thead>

            <tbody>

              {users.map(user=>(

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>{user.username}</td>

                  <td>{user.email}</td>

                  <td>{user.role}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Users;