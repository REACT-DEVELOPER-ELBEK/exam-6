import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/sidebar/Sidebar";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import RequireAuth from "./pages/auth/RequireAuth";
import Details from './pages/productDetails/Details'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>   
          <Route path="product-view/:id" element={<Details/>} />     
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
