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

import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CancellationAndRefunds from "../pages/CancellationAndRefunds/CancellationAndRefunds";
import TermsAndConditionPages from "../pages/TermsAndConditionPages/TermsAndConditionPages";
import CabChargeTaxi from "../pages/CabChargeTaxi/CabChargeTaxi";
import CorporateTips from "../pages/Services/CorporateTips/CorporateTips";
import AirportShuttle from "../pages/Services/AirportShuttle/AirportShuttle";
import TaxiSydneyService from "../pages/Services/TaxiSydneyService/TaxiSydneyService";
import BookTaxiSydneyAiport from "../pages/Services/BookTaxiSydneyAirport/BookTaxiSydneyAirport";
import BabySeatTaxi from "../pages/Services/BabySeatTaxi/BabySeatTaxi";
import WheelChairTaxi from "../pages/Services/WheelChairTaxi/WheelChairTaxi";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import CorporateTransportService from "../pages/Services/CorporateTransportService/CorporateTransportService";
import CruiseTerminalTransfer from "../pages/Services/CruiseTerminalTransfer/CruiseTerminalTransfer";
import WeddingTransfer from "../pages/Services/WeddingTransfer/WeddingTransfer";
import EventTransfer from "../pages/Services/EventTransfer/EventTransfer";
import PercelDelivery from "../pages/Services/PercelDelivery/PercelDelivery";
import MaxiTaxiService from "../pages/Services/MaxiTaxiService/MaxiTaxiService";
import LuxuryTransfer from "../pages/Services/LuxuryTransfer/LuxuryTransfer";

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
        path: "/services",
        Component: Services,
        children: [
          {
            index: true,
            Component: BookTaxiSydneyAiport,
          },
          {
            path: "book-taxi-sydney-airport",
            Component: BookTaxiSydneyAiport,
          },
          {
            path: "baby-seat-taxi-sydney",
            Component: BabySeatTaxi,
          },
          {
            path: "wheelchair-accessible-taxi",
            Component: WheelChairTaxi,
          },
          {
            path: "corporate-transport-services",
            Component: CorporateTransportService,
          },
          {
            path: "cruise-terminal-transfer",
            Component: CruiseTerminalTransfer,
          },
          {
            path: "wedding-transfer",
            Component: WeddingTransfer,
          },
          {
            path: "event-transfer",
            Component: EventTransfer,
          },
          {
            path: "parcel-delivery",
            Component: PercelDelivery,
          },
          {
            path: "maxi-taxi-service",
            Component: MaxiTaxiService,
          },
          {
            path: "luxury-transfer",
            Component: LuxuryTransfer,
          },
          {
            path: "taxi-sydney-service",
            Component: TaxiSydneyService,
          },
          {
            path: "airport-shuttle",
            Component: AirportShuttle,
          },
          {
            path: "corporate-tips",
            Component: CorporateTips,
          },
        ],
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
        path: "/cabcharge-taxi",
        Component: CabChargeTaxi,
      },
      {
        path: "/terms-and-condition",
        Component: TermsAndConditionPages,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/cancellation-and-refunds",
        Component: CancellationAndRefunds,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/*",
        Component: PageNotFound,
      },
    ],
  },
]);
export default router;
