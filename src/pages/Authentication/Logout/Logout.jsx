import "./../Auth.css";

const Logout = () => {
  return (
    <main class="main-wrapper">
      <div class="auth-container">
        <i class="fas fa-check-circle auth-logout-icon"></i>
        <h3 class="auth-logout-title">You have been successfully logged out</h3>
        <p class="auth-link">
          <a href="/Login/login.html">Back to Login</a>
        </p>
      </div>
    </main>
  );
};

export default Logout;
