import "./App.css";
import RootLayout from "./mainPages/homePage/RootLayout";
import HomePage from "./mainPages/homePage/HomePage";
import About from "./mainPages/about/About";

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
