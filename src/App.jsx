import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Sidebar from "./layout/sidebar/Sidebar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import RequireAuth from "./pages/auth/RequireAuth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route index element={<UserDetails />} />
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
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
