import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Details from "./pages/productDetails/Details";
import Adding from "./pages/adding/Adding";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<Adding />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
