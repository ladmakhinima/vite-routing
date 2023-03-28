import { RouteObject } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import DynamicContentPage from "../pages/DynamicContentPage";
import HomePage from "../pages/HomePage";

export const routes: RouteObject[] = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <AboutPage />,
    path: "/about",
  },
  {
    element: <DynamicContentPage />,
    path: "/:me/:you/content",
  },
];
