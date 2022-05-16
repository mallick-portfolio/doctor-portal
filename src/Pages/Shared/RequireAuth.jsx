import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init.js";
import Loading from "./Loading.jsx";

function RequireAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth