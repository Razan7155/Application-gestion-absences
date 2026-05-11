import { useEffect,useState } from "react";
import axios from "../services/axios";

function MyAbsences(){

  const [absences,setAbsences]=useState([]);

  useEffect(()=>{

    loadData();

  },[]);

  const loadData = async()=>{

    const res = await axios.get("/absences");

    setAbsences(res.data);
  };

  return(

    <div className="page-container">

      <div className="page-content">

        <h1 className="page-title">
          My Absences
        </h1>

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

      </div>

    </div>
  )
}

export default MyAbsences;