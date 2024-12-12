import { Navigate, useLocation } from "react-router-dom";
import useAgent from "../hooks/useAgent";
import useAuth from "../hooks/useAuth";

const AgentRoute = (children) => {
  const [user, loading] = useAuth();
  const [isAgent, isAgentLoading] = useAgent();

  const location = useLocation();

  if (loading || isAgentLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (user & isAgent) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AgentRoute;
