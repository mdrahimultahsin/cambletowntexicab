import {createBrowserRouter} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import OurFleet from "../pages/OurFleet/OurFleet";
import Contact from "../pages/Contact/Contact";
import AreaCovered from "../pages/AreaCovered/AreaCovered";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Loading from "../shared/Loading";
import BookATaxi from "../pages/BookATaxi/BookATaxi";
import Services from "../pages/Services/Services";

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
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services/:servicetype",
        Component: Services,
        
      },
      {
        path: "/book-a-taxi",
        Component: BookATaxi,
      },
      {
        path: "/area-covered",
        Component: AreaCovered,
      },
      {
        path: "/blogs",
        Component: Blogs,
     
      },
      {
        path: "/blogs/:id",
        Component: BlogDetails,
        loader: async ({params}) => {
          const res = await fetch("/blogs.json");
          const data = await res.json();
          return data.find((b) => b.id === Number(params.id));
        },
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/fleet",
        Component: OurFleet,
        loader: async () => {
          const res = await fetch("/fleet.json");
          return res.json();
        },
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
export default router;
