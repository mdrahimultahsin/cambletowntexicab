import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router";
import router from "./routes/router.jsx";
import {LoadScript} from "@react-google-maps/api";
import {HelmetProvider} from "react-helmet-async";
import Loading from "./shared/Loading.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_maps_api_key}
      libraries={["places"]}
      loadingElement={<Loading />}
    >

        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
   
    </LoadScript>
  </StrictMode>
);
