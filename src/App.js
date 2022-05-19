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
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import MyAppoinment from "./Pages/Dashboard/MyAppoinment.jsx";
import MyReview from "./Pages/Dashboard/MyReview.jsx";
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinment />} />
          <Route path="review" element={<MyReview />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
