import "./App.css";
import RootLayout from "./mainPages/homePage/RootLayout";
import HomePage from "./mainPages/homePage/HomePage";
import AvticikiBre from "./mainPages/avticikiBre/AvticikiBre";
import Avtomobilizam from "./mainPages/avtomobilizam/Avtomobilizam";
import RogueBrush from "./mainPages/rogueBrush/RogueBrush";
import About from "./mainPages/about/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GalleryCars from "./mainPages/avticikiBre/galleryCars/GalleryCars";
import CarDetails from "./mainPages/avticikiBre/CarDetails";


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
        path: "/avticikiBre/galleryCars",
        element: <GalleryCars />,
      },
      {
        path:"/avticikiBre/galleryCars/:id",
        element:<CarDetails/>
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
