import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        return <Navigate to="/authorization" replace />;
    }
    return children;
};
export default Protected;
