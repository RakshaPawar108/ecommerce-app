import "./../Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./../../../context";
import { provideAuth } from "../../../services";

export const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signUp } = provideAuth();
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.confirmPassword
    ) {
      if (user.password === user.confirmPassword) {
        try {
          let response = await signUp(user);
          if (response.status === 201) {
            authDispatch({
              type: "SIGN_UP",
              payload: {
                user: response.data.createdUser,
                token: response.data.encodedToken,
              },
            });

            alert("Signed Up successfully");
            navigate("/");
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Password and Confirm Password fields should be same");
      }
    } else {
      alert("Enter all fields to sign up");
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
