import { Link } from "react-router-dom";
const CommonFooter = () => {
  return (
    <>
      <footer
        className="pp-footer-section-2 bg-cover"
        style={{ backgroundImage: "url(assets/img/home-2/footer-bg.jpg)" }}
      >
        <div className="container">
          <div className="pp-footer-widget-wrapper pp-style-2">
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
                        style={{ width: "120px" }}
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
                      <Link to="https://x.com/cloudemyIndia" target="blank">
                        <i className="fab fa-x"></i>
                      </Link>
                      <Link to="https://wa.me/919616253555" target="blank">
                        <i className="fab fa-whatsapp"></i>
                      </Link>

                      <Link
                        to="https://www.linkedin.com/company/cloudemyindia/"
                        target="blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
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
                      <Link to="/about">About Us</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
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
                          info@cloudemy.in
                        </a>
                        <br />
                      </h6>
                    </div>
                  </div>
                  <div className="pp-contact-info mb-0">
                    <div className="pp-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="pp-content">
                      <h6>
                        <a href="tel:+919616253555">+91 9616253555</a>
                        <br />
                      </h6>
                    </div>
                  </div>
                  <div className="pp-contact-info mb-0 mt-4">
                    <div className="pp-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="pp-content">
                      <h6>
                        <a>
                          Sector A, Aliganj, Lucknow, Uttar Pradesh, India,
                          226021
                        </a>
                        <br />
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
                Copyright © <b>Cloudemy 2025</b>
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
                  <Link to="/privacy">Privacy Policy</Link>
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

export default CommonFooter;
