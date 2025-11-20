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
        loader: async () => {
          const res = await fetch("/service.json");
          return res.json();
        },
        hydrateFallbackElement: <p>Loading....</p>,
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
        loader: async () => {
          const res = await fetch("/fleet.json");
          return res.json();
        },
        hydrateFallbackElement: <p>Loading....</p>,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
export default router;
