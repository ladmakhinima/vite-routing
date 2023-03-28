import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pagesFs = import.meta.glob("./pages/**/*.tsx", { eager: true });
const pages = Object.keys(pagesFs).map((page) => {
  const Element = (pagesFs[page] as any)?.default;
  return {
    element: <Element />,
    path: `/${page
      .replaceAll(new RegExp(/(\.tsx|index|\.\/pages\/)/gi), "")
      .replaceAll("$", ":")
      .replaceAll(".", "/")}`,
  };
});

const App: FC = () => {
  return <RouterProvider router={createBrowserRouter(pages)} />;
};

export default App;
