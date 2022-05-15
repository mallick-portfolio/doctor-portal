import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Navbar from "./Pages/HomePage/Navbar.jsx";
import Login from "./Pages/Login/Login.jsx";

function App() {
  return (
    <div className="lg:max-w-7xl mx-auto container overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appoinment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
