function MyProfile() {

  const username = localStorage.getItem("username");

  const role = localStorage.getItem("role");

  return (

    <div className="page-container">

      <div className="page-content">

        <h1 className="page-title">
          My Profile
        </h1>

        <div className="profile-card">

          <div className="profile-item">
            <span>Username</span>
            <h3>{username}</h3>
          </div>

          <div className="profile-item">
            <span>Role</span>
            <h3>{role}</h3>
          </div>

          <div className="profile-item">
            <span>Status</span>
            <h3>Active Student</h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default MyProfile;