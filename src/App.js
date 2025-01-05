import "./App.css";
import RootLayout from "./mainPages/homePage/RootLayout";
import HomePage from "./mainPages/homePage/HomePage"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModeratorPage from "./mainPages/moderator/ModeratorPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path:"/",
        element:<HomePage/>,

      },
      {
        path:"moderatorPage",
        element:<ModeratorPage/>

      },
      {
        path:"about",
        element:<HomePage/>,

      }
    ]

    
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
