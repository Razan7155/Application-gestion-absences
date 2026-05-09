import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>AbsenceApp</h2>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/students">Students</Link>

      <Link to="/absences">Absences</Link>

    </div>
  );
}

export default Sidebar;