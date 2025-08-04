import "./App.css";
import RootLayout from "./mainPages/homePage/RootLayout";
import HomePage from "./mainPages/homePage/HomePage";
import About from "./mainPages/about/About";
import Local from "./mainPages/local/Local";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "local",
        element: <Local />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
