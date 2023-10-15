import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Footer from "./components/ui/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider, useSelector, useDispatch } from "react-redux";
import Loading from "./components/ui/Loading";
import NotFound from "./components/ui/NotFound";
import { SignUp as signUserDataUp } from "./components/reducers/userSlice";

const Shop = lazy(() => import("./components/ui/shop/Shop"));
const SelectedItem = lazy(() =>
  import("./components/ui/shop/selectedItem/SelectedItem")
);
const SignUp = lazy(() => import("./components/ui/user/SignUp"));
const Login = lazy(() => import("./components/ui/user/Login"));
const User = lazy(() => import("./components/ui/user/profile/User"));
const Account = lazy(() => import("./components/ui/user/profile/Account"));
const Saved = lazy(() => import("./components/ui/user/profile/cart/Saved"));
const History = lazy(() => import("./components/ui/user/profile/History"));
const Inbox = lazy(() => import("./components/ui/user/profile/Inbox"));
const About = lazy(() => import("./components/ui/About"));

function App() {
  const user = useSelector((state) => state.user);

  const userIdToken = localStorage.getItem("userToken");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userIdToken) {
      dispatch(
        signUserDataUp({
          isConnected: true,
          userId: userIdToken.split(" ")?.[1],
          fullName: {
            firstName: "islam",
            familyName: "El gueniari",
          },
          username: "tinys_smash_",
          email: "islam.gueniari@gmail.com",
          password: "TinySmash2005",
        })
      );
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route exact path="/" element={<Hero />}></Route>
              <Route exact path="/shop" element={<Shop />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route
                path="/shop/product-/:id"
                element={<SelectedItem />}
              ></Route>
              <Route path="/user/:id/:username" element={<User />}>
                <Route path="account" element={<Account />}></Route>
                <Route path="saved-products" element={<Saved />}></Route>
                <Route path="history" element={<History />}></Route>
                <Route path="inbox" element={<Inbox />}></Route>
              </Route>
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
