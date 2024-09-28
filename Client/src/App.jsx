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
import Login from "./Pages/Login";
import OpenRoute from "./Components/Auth/OpenRoute";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/job/:id" element={<JobDetail />}></Route>
        <Route path="/salary" element={<SalaryPage />}></Route>

        <Route
          path="/post-job"
          element={
            <PrivateRoute>
              <CreateJob />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/my-job"
          element={
            <PrivateRoute>
              <MyJobs />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/edit-job/:id"
          element={
            <PrivateRoute>
              <UpdateJob />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/sign-up"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        ></Route>

        <Route
          path="/dashboard/my-profile"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
