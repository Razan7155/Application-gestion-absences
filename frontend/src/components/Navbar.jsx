import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Absence<span>Pro</span>
      </div>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/absences">Absences</Link>
        <Link to="/login" className="nav-login">Login</Link>
      </div>

    </nav>
  );
}

export default Navbar;