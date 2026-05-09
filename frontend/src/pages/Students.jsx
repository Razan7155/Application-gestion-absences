import { useEffect, useState } from "react";

import API from "../api/axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Students() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {

    fetchStudents();

  }, []);

  const fetchStudents = async () => {

    const res = await API.get("/students");

    setStudents(res.data);
  };

  const addStudent = async (e) => {

    e.preventDefault();

    try {

      if (editingId) {

        await API.put(`/students/${editingId}`, {
          name,
          email,
        });

      } else {

        await API.post("/students", {
          name,
          email,
        });
      }

      setName("");
      setEmail("");
      setEditingId(null);

      fetchStudents();

    } catch (err) {

      alert("Error");
    }
  };

  const deleteStudent = async (id) => {

    await API.delete(`/students/${id}`);

    fetchStudents();
  };

  const editStudent = (student) => {

    setEditingId(student.id);

    setName(student.name);

    setEmail(student.email);
  };

  return (

    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <h2>Students</h2>

        <form className="form" onSubmit={addStudent}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">

            {editingId ? "Update" : "Add"}

          </button>

        </form>

        <table>

          <thead>

            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {students.map((s) => (

              <tr key={s.id}>

                <td>{s.id}</td>

                <td>{s.name}</td>

                <td>{s.email}</td>

                <td>

                  <button onClick={() => editStudent(s)}>
                    Edit
                  </button>

                  <button onClick={() => deleteStudent(s.id)}>
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