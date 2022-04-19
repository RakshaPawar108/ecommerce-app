import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar, Footer } from "./components";
import {
  Home,
  Cart,
  Login,
  Signup,
  Logout,
  ProductListing,
  Wishlist,
  User,
  NotFound,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/user" element={<User />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
