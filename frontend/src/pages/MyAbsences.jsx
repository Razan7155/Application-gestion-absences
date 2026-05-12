import { useEffect,useState } from "react";
import axios from "../services/axios";

function MyAbsences(){

  const [absences,setAbsences]=useState([]);

  const username = localStorage.getItem("username");

  useEffect(()=>{

    loadData();

  },[]);

  const loadData = async()=>{

    const res = await axios.get("/absences");

    const filtered = res.data.filter(
      a => a.student?.name === username
    );

    setAbsences(filtered);
  };

  return(

    <div className="page-container">

      <div className="page-content">

        <h1 className="page-title">
          My Absences
        </h1>

        {absences.length === 0 ? (

          <p className="empty-message">
            No absences found.
          </p>

        ) : (

          <table className="modern-table">

            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Justification</th>
              </tr>
            </thead>

            <tbody>

              {absences.map(a=>(

                <tr key={a.id}>
                  <td>{a.date}</td>
                  <td>{a.matiere}</td>
                  <td>{a.justification}</td>
                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  )
}

export default MyAbsences;