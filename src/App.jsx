import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Home,
  Cart,
  Login,
  Signup,
  Logout,
  ProductListing,
  Wishlist,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
