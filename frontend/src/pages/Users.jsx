function Users(){

  const role = localStorage.getItem("role");

  const username = localStorage.getItem("username");

  return(

    <div className="page-container">

      <div className="page-content">

        <h1 className="page-title">
          Users Management
        </h1>

        <table className="modern-table">

          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>{username}</td>
              <td>{role}</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Users;