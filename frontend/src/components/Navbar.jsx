import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <nav className="navbar">

      <div className="logo">
        Absence<span>Pro</span>
      </div>

      <div className="nav-links">

        <Link to="/">Dashboard</Link>

        {
          token && (
            <>
              <Link to="/students">Students</Link>

              <Link to="/absences">Absences</Link>

              <Link to="/analytics">Analytics</Link>
            </>
          )
        }

        {
          !token ? (
            <Link to="/login">
              Login
            </Link>
          ) : (
            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          )
        }

      </div>

    </nav>

  );
}

export default Navbar;