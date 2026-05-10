import { useEffect, useState } from "react";

function Absences() {
  const [absences, setAbsences] = useState([]);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    date: "",
    matiere: "",
    justification: "",
    studentId: ""
  });

  const token = localStorage.getItem("token");

  const fetchAbsences = async () => {
    const res = await fetch("http://localhost:9094/absences", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setAbsences(await res.json());
  };

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:9094/students", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setStudents(await res.json());
  };

  useEffect(() => {
    fetchAbsences();
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:9094/absences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    fetchAbsences();
  };

  return (
    <div className="dashboard-page">

      <h1 className="page-title">Absences Management</h1>

      <div className="glass-card form-card">

        <form onSubmit={handleSubmit} className="modern-form">

          <input
            type="date"
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Matiere"
            onChange={(e) =>
              setForm({ ...form, matiere: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Justification"
            onChange={(e) =>
              setForm({
                ...form,
                justification: e.target.value
              })
            }
          />

          <select
            onChange={(e) =>
              setForm({
                ...form,
                studentId: e.target.value
              })
            }
          >
            <option>Select Student</option>

            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <button type="submit">Add Absence</button>

        </form>

      </div>

      <div className="glass-card">

        <table className="modern-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Matiere</th>
              <th>Justification</th>
            </tr>
          </thead>

          <tbody>
            {absences.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.date}</td>
                <td>{a.matiere}</td>
                <td>{a.justification}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Absences;