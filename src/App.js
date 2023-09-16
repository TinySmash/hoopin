import React, { Suspense, lazy } from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Footer from "./components/ui/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Loading from "./components/ui/Loading";
import NotFound from "./components/ui/NotFound";

const Shop = lazy(() => import("./components/ui/shop/Shop"));
const SelectedItem = lazy(() => import("./components/ui/shop/SelectedItem"));
const SignUp = lazy(() => import("./components/ui/user/SignUp"));
const Login = lazy(() => import("./components/ui/user/Login"));
const User = lazy(() => import("./components/ui/user/profile/User"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route exact path="/" element={<Hero />}></Route>
              <Route exact path="/shop" element={<Shop />}></Route>
              <Route
                path="/shop/product-/:id"
                element={<SelectedItem />}
              ></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
          </Suspense>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
