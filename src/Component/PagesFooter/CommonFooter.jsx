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
            {/* <div className="pp-footer-newsletter">
              <div
                className="pp-newsletter-content wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <h2>Take Your Business Higher — Today!</h2>
                <p>
                  Grow your business smarter with instant services, secure
                  payments, and reliable support—start expanding your success
                  today with confidence.
                </p>
              </div>
              <form
                action="#"
                className="wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="form-clt">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your mail"
                  />
                  <button type="submit" className="pp-theme-btn">
                    <i className="fa-solid fa-paper-plane"></i> Request a Demo
                  </button>
                </div>
              </form>
            </div> */}
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
                  animationDelay: "0.4s",
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
                      <Link to="/services">Service</Link>
                    </li>
                    {/* <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li> */}
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
                      <Link href="/about">Overview</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
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
                Copyright© <b>Cloudemy</b>
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
                  <Link to="#">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
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
