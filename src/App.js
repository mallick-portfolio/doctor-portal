import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Appointment from "./Pages/Appointment/Appointment.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Navbar from "./Pages/HomePage/Navbar.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Login/Register.jsx";
import RequireAuth from "./Pages/Shared/RequireAuth.jsx";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About/About.jsx";
function App() {
  return (
    <div className="lg:max-w-7xl mx-auto container overflow-hidden">
      <ToastContainer autoClose={2000} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
