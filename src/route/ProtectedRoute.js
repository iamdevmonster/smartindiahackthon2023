import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export const ProtectedRoute = ({ children }) => {
    const [user] = useAuthState();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};