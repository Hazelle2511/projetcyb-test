import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import "./App.css.proxy.js";
import Dropdown from "./Components/Dropdown.js";
import Login from "./Components/Login.js";
import Navbar from "./Components/Navbar.js";
import Accueil from "./pages/index.js";
import Contact from "./pages/contact.js";
import {Switch, Route} from "../_snowpack/pkg/react-router-dom.js";
import Signup from "./pages/signup.js";
import Searchbar from "./Components/Searchbar.js";
import Panier from "./Components/ShoppingCard.js";
import GoogleMap from "./Components/GoogleMap.js";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "../_snowpack/pkg/google-maps-react.js";
import Logout from "./Components/Logout/index.js";
import AccessProfil from "./Components/Welcome/accessProfil.js";
import accessProfil from "./Components/Welcome/accessProfil.js";
import Footer from "./Components/Footer.js";
import ForgetPassword from "./Components/ForgetPassword/MdpOublie.js";
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      window.innerWidth > 768 && isOpen ? setIsOpen(false) : null;
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    toggle
  }), /* @__PURE__ */ React.createElement(Dropdown, {
    toggle,
    isOpen
  }), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    exact: true,
    component: Accueil
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/signup",
    component: Signup
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/login",
    component: Login
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/contact",
    component: Contact
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/ShoppingCard",
    component: Panier
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/Logout",
    component: Logout
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/accessProfil",
    component: accessProfil
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/ForgetPassword",
    component: ForgetPassword
  })), /* @__PURE__ */ React.createElement(Footer, null));
};
