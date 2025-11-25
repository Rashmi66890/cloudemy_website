import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header-sticky" className="header-1 header-2">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo" >
              <Link to="/" className="header-logo">
                <img src="assets/img/logo/black-logo.png" alt="logo-img" />
              </Link>
              <Link to="/" className="header-logo-2">
                <img src="assets/img/logo/black-logo.png" alt="logo-img" />
              </Link>
            </div> 

            <div className="mean__menu-wrapper"> 
              <div className="main-menu">    
                <nav id="mobile-menu" style={{ display: "block" }}>
                  <ul>
                    <li className="has-dropdown active menu-thumb">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="has-dropdown active d-xl-none">
                      <Link to="/" className="border-none">
                        Home
                      </Link>
                    </li>

                    <li className="has-dropdown">
                      <Link to="/about">About Us</Link>
                    </li>

                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    {/* <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li> */}

                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="header-right d-flex justify-content-end align-items-center">
              <Link to="/contact" className="pp-theme-btn">
                Get a quote <i className="fa-solid fa-arrow-right-long"></i>
              </Link>

              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle">
                  <div className="header-bar">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
