import { useEffect, useState } from "react";
import axios from "../services/axios";

function Absences() {

  const [absences, setAbsences] = useState([]);

  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    date: "",
    matiere: "",
    justification: "",
    studentId: ""
  });

  useEffect(() => {

    loadAbsences();

    axios.get("/students")
      .then(res => setStudents(res.data));

  }, []);

  const loadAbsences = () => {

    axios.get("/absences")
      .then(res => setAbsences(res.data));
  };

  const addAbsence = async (e) => {

    e.preventDefault();

    await axios.post("/absences", form);

    loadAbsences();

    setForm({
      date: "",
      matiere: "",
      justification: "",
      studentId: ""
    });
  };

  const deleteAbsence = async (id) => {

    if (window.confirm("Delete absence ?")) {

      await axios.delete(`/absences/${id}`);

      loadAbsences();
    }
  };

  return (

    <div className="page-container">

      <div className="page-content">

        <h1>Absences Management</h1>

        <form
          className="student-form"
          onSubmit={addAbsence}
        >

          <select
            value={form.studentId}
            onChange={(e) =>
              setForm({
                ...form,
                studentId: e.target.value
              })
            }
          >

            <option value="">
              Select Student
            </option>

            {students.map(student => (

              <option
                key={student.id}
                value={student.id}
              >
                {student.name}
              </option>

            ))}

          </select>

          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({
                ...form,
                date: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Subject"
            value={form.matiere}
            onChange={(e) =>
              setForm({
                ...form,
                matiere: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Justification"
            value={form.justification}
            onChange={(e) =>
              setForm({
                ...form,
                justification: e.target.value
              })
            }
          />

          <button type="submit">
            Add Absence
          </button>

        </form>

        <div className="glass-table">

          <table>

            <thead>

              <tr>
                <th>Student</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Justification</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {absences.map(abs => (

                <tr key={abs.id}>

                  <td>{abs.student?.name}</td>

                  <td>{abs.date}</td>

                  <td>{abs.matiere}</td>

                  <td>{abs.justification}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteAbsence(abs.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Absences;