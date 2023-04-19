import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "./pages/CartPage";

// Admin
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
// import "./App.css";
import HomePage from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import TransactionList from "./pages/TransactionList";
import SalesList from "./pages/SalesList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin">
            {/* <> */}
            {/* <Topbar /> */}
            {/* <div className="container"> */}
              {/* <Sidebar /> */}
                <Route exact path="/admin/" element={<HomePage/>} />
                <Route path="/admin/users" element={<UserList/>} />
                <Route path="/admin/user/:userId" element={<User/>} />
                <Route path="/admin/newUser" element={<NewUser/>} />
                <Route path="/admin/products" element={<ProductList/>} />
                <Route path="/admin/product/:productId" element={<Product/>} />
                <Route path="/admin/newproduct" element={<NewProduct/>} />
                <Route path="/admin/transaction" element={<TransactionList/>} />
                <Route path="/admin/sales" element={<SalesList/>} />
            {/* </div>
            </> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
