import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const App: FC = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
