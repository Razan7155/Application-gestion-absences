import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/app.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Absences from "./pages/Absences";
import Analytics from "./pages/Analytics";

function App() {

  return (

    <BrowserRouter>

      <div className="app-container">

        <Navbar />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/students"
              element={
                <ProtectedRoute>
                  <Students />
                </ProtectedRoute>
              }
            />

            <Route
              path="/absences"
              element={
                <ProtectedRoute>
                  <Absences />
                </ProtectedRoute>
              }
            />

            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;