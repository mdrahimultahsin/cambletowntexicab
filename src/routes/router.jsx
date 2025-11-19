import {createBrowserRouter} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import OurFleet from "../pages/OurFleet/OurFleet";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/service .json')
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/fleet",
        Component: OurFleet,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
export default router;
