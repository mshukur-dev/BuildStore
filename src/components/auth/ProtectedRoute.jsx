import { Navigate, useLocation } from "react-router";
import { getToken } from "../../api/token";

export const ProtectedRoute = ({ children }) => {
    const token = getToken();
    const location = useLocation();

    if (!token) {
        // Redirect to login page, but save the current location they tried to visit
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
