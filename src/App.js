import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Navbar from "./Pages/HomePage/Navbar.jsx";

function App() {
  return (
    <div className="lg:max-w-7xl mx-auto container overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
