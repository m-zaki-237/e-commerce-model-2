import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Schedule } from "./pages/Schedule";
import { OurDoctors } from "./pages/OurDoctors";
import Appointments from "./pages/Appointments";
import Signup from "./pages/Signup";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/doctors" element={<OurDoctors/>}/>
      <Route path="/appointments" element={<Appointments/>}/>
      <Route path="/schedule/:id" element={<Schedule/>}/>
    </Routes>
    <Toaster/>
    </>
  );
}

export default App;
