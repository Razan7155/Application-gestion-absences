import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  const username = localStorage.getItem("username");

  const logout = () => {

    localStorage.clear();

    navigate("/login");
  };

  return (

    <nav className="navbar">

      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor:"pointer" }}
      >
        Absence<span>Pro</span>
      </div>

      <div className="nav-links">

        {token && role !== "STUDENT" && (
          <>
            <Link to="/">Dashboard</Link>

            <Link to="/students">
              Students
            </Link>

            <Link to="/absences">
              Absences
            </Link>

            <Link to="/analytics">
              Analytics
            </Link>
          </>
        )}

        {role === "ADMIN" && (
          <Link to="/users">
            Users
          </Link>
        )}

        {role === "STUDENT" && (
          <>
            <Link to="/my-absences">
              My Absences
            </Link>

            <Link to="/profile">
              Profile
            </Link>
          </>
        )}

        {token && (
          <div className="user-info">
            {username} ({role})
          </div>
        )}

        {!token ? (

          <Link
            className="login-link"
            to="/login"
          >
            Login
          </Link>

        ) : (

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;