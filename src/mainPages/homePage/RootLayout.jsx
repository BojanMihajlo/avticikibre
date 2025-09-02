import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";

const RootLayout = () => {
  const [subtitle, setSubtitle] = useState(true);

  const location = useLocation();

  const pathname = location.pathname.replace(/\/$/, "");

  const shouldShowFooter = !pathname.endsWith("galleryCars");

  return (
    <>
      <Outlet context={[subtitle, setSubtitle]} />
      {shouldShowFooter && (
        <Footer subtitle={subtitle} setSubtitle={setSubtitle} />
      )}
    </>
  );
};

export default RootLayout;
