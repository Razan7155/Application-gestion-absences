import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div>

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-content">

          <h1>
            Smart <span>Absence</span><br />
            Platform
          </h1>

          <p>
            Modern and professional absence management dashboard
            built with Spring Boot and React.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/students")}
          >
            Explore Dashboard
          </button>

        </div>

      </section>

      {/* SERVICES */}

      <section className="services-section">

        <div className="cards-container">

          <div className="service-card">

            <h2>Students</h2>

            <p>
              Manage all academic profiles
              with a modern interface.
            </p>

            <button
              onClick={() => navigate("/students")}
            >
              Open Service
            </button>

          </div>

          <div className="service-card">

            <h2>Absences</h2>

            <p>
              Track and monitor attendance
              efficiently and professionally.
            </p>

            <button
              onClick={() => navigate("/absences")}
            >
              Open Service
            </button>

          </div>

          <div className="service-card">

            <h2>Analytics</h2>

            <p>
              Visualize reports and statistics
              with advanced dashboards.
            </p>

            <button>
              Open Service
            </button>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Dashboard;
