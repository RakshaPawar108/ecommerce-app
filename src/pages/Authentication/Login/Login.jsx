import "./../Auth.css";

const Login = () => {
  return (
    <main class="main-wrapper">
      <form class="auth-container">
        <h1 class="auth-title">Login</h1>
        <p class="auth-subtitle">Please enter your email and password</p>
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

        <div class="inline">
          <span class="inline-checkbox">
            <input type="checkbox" name="remember" id="remember" />
            <label class="remember-box" for="remember">
              Remember Me
            </label>
          </span>

          <p class="auth-link">
            <a href="/">Forgot Password?</a>
          </p>
        </div>

        <button type="submit" class="button btn-info btn-signup">
          Login
        </button>
        <p class="auth-link">
          Don't have an account?
          <a href="/Signup/signup.html">Sign Up</a>
        </p>
      </form>
    </main>
  );
};

export default Login;
