import "./../Auth.css";

const Signup = () => {
  return (
    <main class="main-wrapper">
      <form class="auth-container">
        <h1 class="auth-title">Signup</h1>
        <p class="auth-subtitle">Create an Account</p>
        <div class="input-container standard auth-name">
          <input type="text" />
          <label>Enter Your Name</label>
        </div>
        <div class="input-container standard auth-email">
          <input type="email" />
          <label>Enter Your Email</label>
          <small>Enter Valid Email</small>
        </div>

        <div class="input-container standard auth-password">
          <input type="password" />
          <label>Enter Password</label>
          <small>Enter Valid Password</small>
        </div>

        <div class="input-container standard auth-password-confirm">
          <input type="password" />
          <label>Confirm Password</label>
          <small>Enter Valid Password</small>
        </div>

        <button type="submit" class="button btn-info btn-signup">
          Sign Up
        </button>
        <p class="auth-link">
          Already have an existing account?
          <a href="/Login/login.html">Login</a>
        </p>
      </form>
    </main>
  );
};

export default Signup;
