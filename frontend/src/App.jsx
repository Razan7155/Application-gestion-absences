import {
  BrowserRouter,
  Routes,
 Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Absences from "./pages/Absences";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import MyAbsences from "./pages/MyAbsences";
import MyProfile from "./pages/MyProfile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute
              roles={["ADMIN","ENSEIGNANT"]}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students"
          element={
            <ProtectedRoute
              roles={["ADMIN","ENSEIGNANT"]}
            >
              <Students />
            </ProtectedRoute>
          }
        />

        <Route
          path="/absences"
          element={
            <ProtectedRoute
              roles={["ADMIN","ENSEIGNANT"]}
            >
              <Absences />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              roles={["ADMIN","ENSEIGNANT"]}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute
              roles={["ADMIN"]}
            >
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-absences"
          element={
            <ProtectedRoute
              roles={["STUDENT"]}
            >
              <MyAbsences />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              roles={["STUDENT"]}
            >
              <MyProfile />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;