import { useEffect, useState } from "react";
import axios from "../services/axios";

function Absences() {

  const [absences, setAbsences] = useState([]);

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [dateFilter, setDateFilter] = useState("");

  const [form, setForm] = useState({
    date: "",
    matiere: "",
    justification: "",
    studentId: ""
  });

  useEffect(() => {

    loadAbsences();

    loadStudents();

  }, []);

  const loadAbsences = async () => {

    const res = await axios.get("/absences");

    setAbsences(res.data);
  };

  const loadStudents = async () => {

    const res = await axios.get("/students");

    setStudents(res.data);
  };

  const addAbsence = async (e) => {

    e.preventDefault();

    await axios.post("/absences", form);

    setForm({
      date: "",
      matiere: "",
      justification: "",
      studentId: ""
    });

    loadAbsences();
  };

  const deleteAbsence = async (id) => {

    if (window.confirm("Delete absence ?")) {

      await axios.delete(`/absences/${id}`);

      loadAbsences();
    }
  };

  const filteredAbsences = absences.filter(abs => {

    const matchSearch =

      abs.student?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      abs.matiere
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchDate = dateFilter
      ? abs.date === dateFilter
      : true;

    return matchSearch && matchDate;
  });

  return (

    <div className="page-container">

      <div className="page-content">

        <h1 className="page-title">
          Absences Management
        </h1>

        <div className="filters-container">

          <input
            type="text"
            placeholder="Search by student or subject"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <input
            type="date"
            value={dateFilter}
            onChange={(e) =>
              setDateFilter(e.target.value)
            }
          />

        </div>

        <form
          className="modern-form"
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

          <button
            className="modern-btn"
            type="submit"
          >
            Add Absence
          </button>

        </form>

        <div className="glass-table">

          <table className="modern-table">

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

              {filteredAbsences.map(abs => (

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