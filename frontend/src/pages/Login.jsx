import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:9094/auth/login",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/students");

    } catch (error) {

      alert("Invalid credentials");
    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>
          Access your professional dashboard
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;