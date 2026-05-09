import { useEffect, useState } from "react";

import API from "../api/axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Absences() {

  const [absences, setAbsences] = useState([]);

  const [reason, setReason] = useState("");

  const [date, setDate] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {

    fetchAbsences();

  }, []);

  const fetchAbsences = async () => {

    const res = await API.get("/absences");

    setAbsences(res.data);
  };

  const addAbsence = async (e) => {

    e.preventDefault();

    try {

      if (editingId) {

        await API.put(`/absences/${editingId}`, {
          reason,
          date,
        });

      } else {

        await API.post("/absences", {
          reason,
          date,
        });
      }

      setReason("");
      setDate("");
      setEditingId(null);

      fetchAbsences();

    } catch (err) {

      alert("Error");
    }
  };

  const deleteAbsence = async (id) => {

    await API.delete(`/absences/${id}`);

    fetchAbsences();
  };

  const editAbsence = (absence) => {

    setEditingId(absence.id);

    setReason(absence.reason);

    setDate(absence.date);
  };

  return (

    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <h2>Absences</h2>

        <form className="form" onSubmit={addAbsence}>

          <input
            type="text"
            placeholder="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
              <th>Date</th>
              <th>Reason</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {absences.map((a) => (

              <tr key={a.id}>

                <td>{a.id}</td>

                <td>{a.date}</td>

                <td>{a.reason}</td>

                <td>

                  <button onClick={() => editAbsence(a)}>
                    Edit
                  </button>

                  <button onClick={() => deleteAbsence(a.id)}>
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

export default Absences;