import "./../Auth.css";

export const Signup = () => {
  return (
    <main className="main-wrapper">
      <form className="auth-container">
        <h1 className="auth-title">Signup</h1>
        <p className="auth-subtitle">Create an Account</p>
        <div className="input-container standard auth-name">
          <input type="text" />
          <label>Enter Your Name</label>
        </div>
        <div className="input-container standard auth-email">
          <input type="email" />
          <label>Enter Your Email</label>
          <small>Enter Valid Email</small>
        </div>

        <div className="input-container standard auth-password">
          <input type="password" />
          <label>Enter Password</label>
          <small>Enter Valid Password</small>
        </div>

        <div className="input-container standard auth-password-confirm">
          <input type="password" />
          <label>Confirm Password</label>
          <small>Enter Valid Password</small>
        </div>

        <button type="submit" className="button btn-info btn-signup">
          Sign Up
        </button>
        <p className="auth-link">
          Already have an existing account?
          <a href="/Login/login.html">Login</a>
        </p>
      </form>
    </main>
  );
};
