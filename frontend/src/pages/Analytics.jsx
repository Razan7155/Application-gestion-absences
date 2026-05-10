import { useEffect, useState } from "react";

function Analytics() {
  const [students, setStudents] = useState(0);
  const [absences, setAbsences] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadStats = async () => {

      const s = await fetch(
        "http://localhost:9094/students",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const a = await fetch(
        "http://localhost:9094/absences",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setStudents((await s.json()).length);
      setAbsences((await a.json()).length);
    };

    loadStats();
  }, []);

  return (
    <div className="dashboard-page">

      <h1 className="page-title">Analytics</h1>

      <div className="stats-grid">

        <div className="glass-card stat-card">
          <h2>{students}</h2>
          <p>Total Students</p>
        </div>

        <div className="glass-card stat-card">
          <h2>{absences}</h2>
          <p>Total Absences</p>
        </div>

      </div>

    </div>
  );
}

export default Analytics;