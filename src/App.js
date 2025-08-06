import "./App.css";
import RootLayout from "./mainPages/homePage/RootLayout";
import HomePage from "./mainPages/homePage/HomePage";
import AvticikiBre from "./mainPages/avticikiBre/AvticikiBre";
import Avtomobilizam from "./mainPages/avtomobilizam/Avtomobilizam";
import RogueBrush from "./mainPages/rogueBrush/RogueBrush";
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
        path: "/avticikiBre",
        element: <AvticikiBre />,
      },

      {
        path: "/automobiles",
        element: <Avtomobilizam />,
      },

      {
        path: "/roguebrush",
        element: <RogueBrush />,
      },

      {
        path: "/local",
        element: <Local />,
      },

      {
        path: "/about",
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
