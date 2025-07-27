import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";

const RootLayout = () => {
  const [subtitle, setSubtitle] = useState(true);
  return (
    <>
      <Navbar subtitle={subtitle} setSubtitleState={setSubtitle} />
      <Outlet context={[subtitle]} />
      <Footer subtitle={subtitle} setSubtitleState={setSubtitle} />
    </>
  );
};

export default RootLayout;
