import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      localStorage.setItem(
        "username",
        response.data.username
      );

      if (response.data.role === "STUDENT") {

        navigate("/my-absences");

      } else {

        navigate("/");
      }

    } catch (err) {

      setError("Invalid credentials");
    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>AbsencePro</h1>

        <input
          type="text"
          placeholder="Username"
          onChange={(e)=>
            setForm({
              ...form,
              username:e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>
            setForm({
              ...form,
              password:e.target.value
            })
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        {error && (
          <p style={{color:"red"}}>
            {error}
          </p>
        )}

      </div>

    </div>
  );
}

export default Login;