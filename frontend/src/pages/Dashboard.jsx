import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {

  return (

    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <div className="cards">

          <div className="card">
            <h2>Students</h2>
          </div>

          <div className="card">
            <h2>Absences</h2>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;