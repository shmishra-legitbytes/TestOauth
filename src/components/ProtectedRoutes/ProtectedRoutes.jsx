import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  //for testing isLoggedIn
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
}
