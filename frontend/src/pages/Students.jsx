import { useEffect, useState } from "react";
import axios from "../services/axios";

function Students() {

  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    filiere: ""
  });

  const loadStudents = async () => {

    const res = await axios.get("/students");

    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const addStudent = async (e) => {

    e.preventDefault();

    await axios.post("/students", form);

    setForm({
      name: "",
      email: "",
      filiere: ""
    });

    loadStudents();
  };

  const deleteStudent = async (id) => {

    if (window.confirm("Delete student ?")) {

      await axios.delete(`/students/${id}`);

      loadStudents();
    }
  };

  return (

    <div className="page-container">

      <div className="page-content">

        <h1>Students Management</h1>

        <form
          className="student-form"
          onSubmit={addStudent}
        >

          <input
            type="text"
            placeholder="Student Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Filiere"
            value={form.filiere}
            onChange={(e) =>
              setForm({
                ...form,
                filiere: e.target.value
              })
            }
          />

          <button type="submit">
            Add Student
          </button>

        </form>

        <div className="glass-table">

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Filiere</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {students.map((student) => (

                <tr key={student.id}>

                  <td>{student.id}</td>

                  <td>{student.name}</td>

                  <td>{student.email}</td>

                  <td>{student.filiere}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteStudent(student.id)
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

export default Students;