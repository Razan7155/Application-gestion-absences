import { useEffect, useState } from "react";
import API from "../services/api";

function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    API.get("/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (

    <div className="page-container">

      <div className="page-content">

        <h1>Students</h1>

        <div className="glass-table">

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>

            </thead>

            <tbody>

              {students.map((student) => (

                <tr key={student.id}>

                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>

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