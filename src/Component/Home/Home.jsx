import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";
import AboveHeader from "./AboveHeader.jsx";
import HeaderHome from "./HeaderHome.jsx";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        preloader.style.transition = "opacity 0.5s ease";
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="C" className="letters-loading">
              C
            </span>
            <span data-text-preloader="L" className="letters-loading">
              L
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="D" className="letters-loading">
              D
            </span>
            <span data-text-preloader="L" className="letters-loading">
              E
            </span>
            <span data-text-preloader="L" className="letters-loading">
              M
            </span>
            <span data-text-preloader="Y" className="letters-loading">
              Y
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>

      <AboveHeader />
      <HeaderHome />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
