import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router";
import router from "./routes/router.jsx";
import {LoadScript} from "@react-google-maps/api";
import Loading from "./shared/Loading.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_maps_api_key}
      libraries={["places"]}
      loadingElement={<Loading />}
    >
      <RouterProvider router={router} />
    </LoadScript>
  </StrictMode>
);
