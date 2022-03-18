import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Authentication/Login/Login";
import Logout from "./pages/Authentication/Logout/Logout";
import Signup from "./pages/Authentication/Signup/Signup";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
