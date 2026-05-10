import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    filiere: ""
  });

  const token = localStorage.getItem("token");

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:9094/students", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:9094/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    setForm({
      name: "",
      email: "",
      filiere: ""
    });

    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:9094/students/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchStudents();
  };

  return (
    <div className="dashboard-page">

      <h1 className="page-title">Students Management</h1>

      <div className="glass-card form-card">
        <form onSubmit={handleSubmit} className="modern-form">

          <input
            type="text"
            placeholder="Student Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Filiere"
            value={form.filiere}
            onChange={(e) =>
              setForm({ ...form, filiere: e.target.value })
            }
          />

          <button type="submit">Add Student</button>

        </form>
      </div>

      <div className="glass-card">
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
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.filiere}</td>
                <td>
                  <button
                    className="danger-btn"
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
  );
}

export default Students;