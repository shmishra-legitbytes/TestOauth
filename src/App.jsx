import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/auth/login/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/auth/register/Register";
function App() {
  return (
    <Routes>
      {/* Public Routes will go here */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protected Routes will go here */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
