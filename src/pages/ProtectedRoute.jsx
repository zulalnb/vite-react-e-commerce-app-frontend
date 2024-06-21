import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children, admin }) {
  const { loggedIn, user } = useAuth();

  console.log(admin, user?.role, admin && user.role !== "admin");

  if (admin && user.role !== "admin") {
    return <Navigate to="/" />;
  }
  if (loggedIn) {
    return children;
  }
  return <Navigate to="/" />;
}

export default ProtectedRoute;
