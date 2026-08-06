import { createBrowserRouter } from "react-router";
import Root from "./Layout/Root";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";

  export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "gallery", Component: Gallery },
    ],
  },
]);
