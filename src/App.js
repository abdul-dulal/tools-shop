import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/page/dashborad/Dashboard";
import Footer from "./components/shere/Footer";
import Purchase from "./components/page/purchase/Purchase";
import { ToastContainer } from "react-toastify";
import AddProduct from "./components/page/dashborad/AddProduct";
import { PublicRoute } from "./components/page/route/PublicRoute";
import MyOrder from "./components/page/dashborad/MyOrder";
import AddReview from "./components/page/dashborad/AddReview";
import ManageOrders from "./components/page/dashborad/ManageOrder";
import RequireAdmin from "./components/page/dashborad/Requiradmin";
import Payment from "./components/page/dashborad/Payment";
import Alluser from "./components/page/dashborad/Alluser";
import PrivateRoute from "../src/components/page/route/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {PublicRoute.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}

        <Route
          path="purchase/:id"
          element={
            <PrivateRoute>
              <Purchase />
            </PrivateRoute>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="myorder" element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route index element={<AddProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="manageorder" element={<ManageOrders />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="alluser"
            element={
              <RequireAdmin>
                <Alluser />
              </RequireAdmin>
            }
          />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
