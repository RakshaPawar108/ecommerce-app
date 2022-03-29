import "./../Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../context";
import { provideAuth } from "../../../services";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { dispatch } = useAuth();
  const { logIn } = provideAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await logIn(user);
      if (response.status === 200) {
        dispatch({
          type: "LOGIN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken,
          },
        });

        alert("Logged In successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="main-wrapper">
      <form className="auth-container">
        <h1 className="auth-title">Login</h1>
        <p className="auth-subtitle">Please enter your email and password</p>
        <div className="input-container standard auth-email">
          <input
            type="email"
            id="email"
            placeholder=" "
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            value={user.email}
          />
          <label htmlFor="email">Enter Your Email</label>
          <small>Enter Valid Email</small>
        </div>

        <div className="input-container standard auth-password">
          <input
            type="password"
            id="password"
            placeholder=" "
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            value={user.password}
          />
          <label htmlFor="password">Enter Password</label>
          <small>Enter Valid Password</small>
        </div>

        <div className="inline">
          <span className="inline-checkbox">
            <input type="checkbox" name="remember" id="remember" />
            <label className="remember-box" htmlFor="remember">
              Remember Me
            </label>
          </span>

          <p className="auth-link">
            <Link to="/">Forgot Password?</Link>
          </p>
        </div>

        <button
          type="submit"
          className="button btn-info btn-signup"
          onClick={submitHandler}
        >
          Login
        </button>
        <p className="auth-link">
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </main>
  );
};
