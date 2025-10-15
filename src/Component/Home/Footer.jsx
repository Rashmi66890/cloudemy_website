import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pp-footer-section section-bg-2">
        <div className="top-shape">
          <img src="assets/img/home-1/bg-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="pp-footer-widget-wrapper">
            <div className="row justify-content-between">
              <div
                className="col-xl-5 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-footer-widget-items">
                  <div className="pp-widget-head">
                    <Link to="/" className="pp-footer-logo">
                      <img
                        src="assets/img/logo/black-logo.png"
                        alt="img"
                        style={{ width: "200px" }}
                      />
                    </Link>
                  </div>
                  <div className="pp-footer-content">
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        <i>Your Vision , Our Innovation</i>&nbsp;
                      </span>
                      -&nbsp;We transform your unique ideas into powerful
                      digital solutions through creativity, precision, and
                      cutting-edge technology.
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-2 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-footer-widget-items">
                  <div className="pp-widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="pp-list-area">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-2 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-footer-widget-items">
                  <div className="pp-widget-head">
                    <h3>Company</h3>
                  </div>
                  <ul className="pp-list-area">
                    <li>
                      <Link to="/about">Overview</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/careers">Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-2 wow fadeInUp"
                data-wow-delay=".8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-footer-widget-items">
                  <div className="pp-widget-head">
                    <h3>Ready to Get Started?</h3>
                  </div>
                  <div className="pp-contact-info">
                    <div className="pp-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="pp-content">
                      <h6>
                        <a href="mailto:contact.tech@gmail.com">
                          contact.tech@gmail.com
                        </a>
                        <br />
                        <a href="mailto:info@neotech.com">info@neotech.com</a>
                      </h6>
                    </div>
                  </div>
                  <div className="pp-contact-info mb-0">
                    <div className="pp-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="pp-content">
                      <h6>
                        <a href="tel:+88012365478900">+880 123 654 789 00</a>
                        <br />
                        <a href="tel:+001652069800">+001 6520 698 00</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom3">
          <div className="container">
            <div className="pp-footer-bottom-wrapper">
              <p
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Copyright© <b>Pixel-plus</b>
              </p>
              <ul
                className="pp-footer-list wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
