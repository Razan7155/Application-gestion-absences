import { useEffect, useState } from "react";
import axios from "../services/axios";

function Students() {

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    filiere: ""
  });

  useEffect(() => {

    loadStudents();

  }, []);

  const loadStudents = async () => {

    const res = await axios.get("/students");

    setStudents(res.data);
  };

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

  const filteredStudents = students.filter(student =>

    student.name
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||

    student.email
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||

    student.filiere
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="page-container">

      <div className="page-content">

        <h1 className="page-title">
          Students Management
        </h1>

        {/* SEARCH */}

        <div className="search-bar">

          <input
            type="text"
            placeholder="Search by name, email or filiere..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* FORM */}

        <form
          className="modern-form"
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

          <button
            className="modern-btn"
            type="submit"
          >
            Add Student
          </button>

        </form>

        {/* TABLE */}

        <div className="glass-table">

          <table className="modern-table">

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

              {filteredStudents.map(student => (

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