import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./User.css";

export const User = () => {
  const { dispatch } = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <h2>Logout</h2>
      <Link to="/logout">
        <button className="button btn-logout" onClick={logoutHandler}>
          Logout
        </button>
      </Link>
    </div>
  );
};
