import "./../Auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./../../../context";

export const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const { signUp } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let status = await signUp(user);
      console.log(status);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="main-wrapper">
      <form className="auth-container" action="" method="post">
        <h1 className="auth-title">Signup</h1>
        <p className="auth-subtitle">Create an Account</p>
        <div className="input-container standard auth-name">
          <input
            type="text"
            id="firstName"
            placeholder=" "
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
            value={user.firstName}
          />
          <label htmlFor="firstName">Enter Your First Name</label>
        </div>
        <div className="input-container standard auth-name">
          <input
            type="text"
            id="lastName"
            placeholder=" "
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
            value={user.lastName}
          />
          <label htmlFor="lastName">Enter Your Last Name</label>
        </div>
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

        <div className="input-container standard auth-password-confirm">
          <input
            type="password"
            id="confirmPassword"
            placeholder=" "
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
            }}
            value={user.confirmPassword}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <small>Enter Valid Password</small>
        </div>

        <button
          type="submit"
          className="button btn-info btn-signup"
          onClick={submitHandler}
        >
          Sign Up
        </button>
        <p className="auth-link">
          Already have an existing account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </main>
  );
};
