import { Navbar, Footer } from "./components/index";
import {
  Home,
  Cart,
  Login,
  Signup,
  Logout,
  ProductListing,
  Wishlist,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
