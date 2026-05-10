import { useEffect, useState } from "react";
import API from "../services/api";

function Absences() {

  const [absences, setAbsences] = useState([]);

  useEffect(() => {

    API.get("/absences")
      .then((res) => setAbsences(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (

    <div className="page-container">

      <div className="page-content">

        <h1>Absences</h1>

        <div className="glass-table">

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Date</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {absences.map((absence) => (

                <tr key={absence.id}>

                  <td>{absence.id}</td>
                  <td>{absence.studentName}</td>
                  <td>{absence.date}</td>
                  <td>{absence.status}</td>

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