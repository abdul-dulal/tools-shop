import Contact from "../contact/Contact";
import Home from "../home/Home";
import Login from "../login/Login";
import Shop from "../shop/Shop";
import Signup from "../signup/Signup";

export const PublicRoute = [
  { path: "/", name: "home", Component: Home },
  { path: "/home", name: "home", Component: Home },
  { path: "/shop", name: "shop", Component: Shop },
  { path: "/login", name: "login", Component: Login },
  { path: "/signup", name: "signup", Component: Signup },
  { path: "/contact", name: "contact", Component: Contact },
];
