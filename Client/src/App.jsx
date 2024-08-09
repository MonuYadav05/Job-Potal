import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </>
  );
}

export default App;
