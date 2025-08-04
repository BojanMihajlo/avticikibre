import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";

const RootLayout = () => {
  const [subtitle, setSubtitle] = useState(true);
  return (
    <>
      {/* <Navbar subtitle={subtitle} setSubtitle={setSubtitle} /> */}
      <Outlet context={[subtitle, setSubtitle]} />
      <Footer subtitle={subtitle} setSubtitle={setSubtitle} />
    </>
  );
};

export default RootLayout;
