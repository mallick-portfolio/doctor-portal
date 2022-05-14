import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Navbar from "./Pages/HomePage/Navbar.jsx";

function App() {
  return (
    <div className="lg:max-w-7xl mx-auto overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
