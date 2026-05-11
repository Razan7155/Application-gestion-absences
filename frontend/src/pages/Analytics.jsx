import { useEffect, useState } from "react";
import axios from "../services/axios";

function Analytics() {

  const [studentsCount, setStudentsCount] = useState(0);

  const [absencesCount, setAbsencesCount] = useState(0);

  useEffect(() => {

    loadStats();

  }, []);

  const loadStats = async () => {

    try {

      const studentsRes = await axios.get("/students");

      const absencesRes = await axios.get("/absences");

      setStudentsCount(studentsRes.data.length);

      setAbsencesCount(absencesRes.data.length);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="page-container">

      <div className="page-content">

        <h1>Analytics Dashboard</h1>

        <div className="stats-grid">

          <div className="glass-card stat-card">

            <h2>{studentsCount}</h2>

            <p>Total Students</p>

          </div>

          <div className="glass-card stat-card">

            <h2>{absencesCount}</h2>

            <p>Total Absences</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;