import "./../Auth.css";
import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <main className="main-wrapper">
      <div className="auth-container">
        <i className="fas fa-check-circle auth-logout-icon"></i>
        <h3 className="auth-logout-title">
          You have been successfully logged out
        </h3>
        <p className="auth-link">
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </main>
  );
};
