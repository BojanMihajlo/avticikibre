import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import useScrollTriggerCleanup from "../../hooks/useScrollTriggerCleanup";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const RootLayout = () => {
  // 🌍 language
  const savedLang = localStorage.getItem("lang");
  const [subtitle, setSubtitle] = useState(savedLang !== "en");

  useScrollTriggerCleanup();

  const location = useLocation();
  const pathname = location.pathname;

  
  const [loading, setLoading] = useState(false);

  
  

  useEffect(() => {
     
  const noLoaderRoutes = ["/"];
    if (noLoaderRoutes.includes(pathname)) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, [pathname]);

  
  const hideFooterRoutes = [
    "/gallery",
    "/realCarGallery",
  ];

  const shouldShowFooter = !hideFooterRoutes.some(route =>
    pathname.includes(route)
  );

  return (
    <>
      <ScrollToTop />

      {/* 🔥 LOADER */}
      {loading && <Loader />}

      {/* 🌐 ROUTES */}
      <Outlet context={[subtitle, setSubtitle]} />

      {/* 👣 FOOTER */}
      {shouldShowFooter && (
        <Footer subtitle={subtitle} setSubtitle={setSubtitle} />
      )}
    </>
  );
};

export default RootLayout;
