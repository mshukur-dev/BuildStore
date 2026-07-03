import { Navigate } from "react-router";
import { getToken } from "../../api/token";

// Only for guests (not logged in). If a token exists, redirect to home.
export const GuestRoute = ({ children }) => {
    const token = getToken();

    if (token) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};
