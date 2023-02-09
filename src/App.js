import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LogIn from "./Pages/LogIn";
import DiscoveryPage from "./Pages/Discoverypage";
import Register from "./Pages/Register";
import ProtectedRoute from "./hoc/ProtectedRoute";
import NewCar from "./Pages/NewCarPages";
import EditCard from "./Pages/EditCard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/discovery" element={<DiscoveryPage />} />
            <Route path="/newCar" element={<NewCar />} />
            <Route path="/edit" element={<EditCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
