import "./styles.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Home from "./pages/Admin/Home";
import AdminProducts from "./pages/Admin/Products";
import Orders from "./pages/Admin/Orders";
import NewProduct from "./pages/Admin/Products/new";
import AdminProductDetail from "./pages/Admin/ProductDetail";
import Admin from "./pages/Admin";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute admin={true}>
                  <Admin />
                </ProtectedRoute>
              }
            >
              <Route path="" element={<Home />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="products/new" element={<NewProduct />} />
              <Route
                path="products/:product_id"
                element={<AdminProductDetail />}
              />
            </Route>
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
