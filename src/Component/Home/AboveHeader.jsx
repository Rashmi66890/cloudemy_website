import { Link } from "react-router-dom";

const AboveHeader = () => {
  return (
    <>
      <button id="pp-back-top" class="pp-back-to-top show">
        <i class="fa-solid fa-arrow-up"></i>
      </button>

      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img
                      src="assets/img/logo/black-logo.png"
                      alt="logo-img"
                      style={{ height: "60px", width: "auto" }}
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <div className="mobile-menu fix mb-3"></div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a>
                        Sector A, Aliganj, Lucknow, Uttar Pradesh, India, 226021
                      </a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="mailto:info@info@cloudemy.in">
                        info@cloudemy.in
                      </Link>
                    </div>
                  </li>

                  {/* <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a>Mon–Fri, 09am–05pm</a>
                    </div>
                  </li> */}

                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="tel:+919616253555">+91 9616253555</Link>
                    </div>
                  </li>
                </ul>

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
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
    </>
  );
};

export default AboveHeader;
