import API from "../services/api";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <h1>
          Welcome <span>Back</span>
        </h1>

        <p>Access your administrator dashboard</p>

        <form>

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Sign In
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;