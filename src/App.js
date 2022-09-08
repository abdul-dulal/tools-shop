import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/page/home/Home";
import Shop from "./components/page/shop/Shop";
import Dashboard from "./components/page/dashborad/Dashboard";
import Contact from "./components/page/contact/Contact";
import Signup from "./components/page/signup/Signup";
import Login from "./components/page/login/Login";
import Footer from "./components/shere/Footer";
import Purchase from "./components/page/purchase/Purchase";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="purchase/:id" element={<Purchase />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
