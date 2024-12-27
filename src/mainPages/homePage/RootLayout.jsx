import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const RootLayout = () => {
  const [subtitle, setSubtitle] = useState(true);
  return (
    <>
      <Navbar subtitle={subtitle} setSubtitleState={setSubtitle} />
      <Outlet />
    </>
  );
};

export default RootLayout;
