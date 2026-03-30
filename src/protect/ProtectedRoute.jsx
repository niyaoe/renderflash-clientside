import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyUser } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const data = await verifyUser();
      setUser(data);
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;