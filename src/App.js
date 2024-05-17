import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Exercises from "./pages/Exercises";
import Goals from "./pages/Goals";
import Foods from "./pages/Foods";
import Dashboard from "./pages/Dashboard";
import NonDesktopPage from "./pages/NonDesktopPage";

function App() {
  return (
    <>
      <div className="block xl:hidden h-screen">
        <NonDesktopPage />
      </div>
      <div className="hidden xl:flex h-screen App font-bold">
        <NavBar />
        <div className="w-[85%] bg-[#f8dce6] text-black h-screen overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/foods" element={<Foods />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
