import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CreateJob from "./Pages/CreateJob";
import SalaryPage from "./Pages/SalaryPage";
import MyJobs from "./Pages/MyJobs";
import JobDetail from "./Pages/JobDetail";
import UpdateJob from "./Pages/UpdateJob";
import Signup from "./Pages/SignUp";
import VerifyEmail from "./Pages/VerifyEmail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post-job" element={<CreateJob />}></Route>
        <Route path="/my-job" element={<MyJobs />}></Route>
        <Route path="/salary" element={<SalaryPage />}></Route>
        <Route path="/edit-job/:id" element={<UpdateJob />}></Route>
        <Route path="/job/:id" element={<JobDetail />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
      </Routes>
    </>
  );
}

export default App;
