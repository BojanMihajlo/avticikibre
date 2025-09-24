import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const RootLayout = () => {
  const [subtitle, setSubtitle] = useState(true);

  const location = useLocation();

  const pathname = location.pathname;
  const shouldShowFooter = !pathname.includes("/gallery");
  return (
    <>
      <ScrollToTop />
      <Outlet context={[subtitle, setSubtitle]} />
      {shouldShowFooter && (
        <Footer subtitle={subtitle} setSubtitle={setSubtitle} />
      )}
    </>
  );
};

export default RootLayout;
