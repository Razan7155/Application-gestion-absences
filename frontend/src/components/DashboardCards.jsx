function DashboardCards() {
  return (
    <div className="cards-container">

      <div className="service-card">
        <h2>Students</h2>

        <p>
          Manage all students professionally and efficiently.
        </p>

        <button>Open Service</button>
      </div>

      <div className="service-card">
        <h2>Absences</h2>

        <p>
          Track and manage absences in real time.
        </p>

        <button>Open Service</button>
      </div>

      <div className="service-card">
        <h2>Statistics</h2>

        <p>
          Analyze attendance and student performance.
        </p>

        <button>Open Service</button>
      </div>

    </div>
  );
}

export default DashboardCards;