import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsersContext } from "../../context/UsersContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UsersContext);
  return user ? children : <Navigate to="/signin" />;
}
