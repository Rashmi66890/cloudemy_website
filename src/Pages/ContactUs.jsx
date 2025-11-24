import AboveHeader from "../Component/Home/AboveHeader.jsx";
import Header from "../Component/Home/Header.jsx";
import CommonFooter from "../Component/PagesFooter/CommonFooter.jsx";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <AboveHeader />
      <Header />
      <div
        className="pp-breadcrumb-wrapper fix bg-cover"
        style={{ backgroundImage: "url(assets/img/inner-page/breadcrumb.jpg)" }}
      >
        <div className="container">
          <div className="pp-page-heading">
            <div className="pp-breadcrumb-sub-title">
              <h1
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="pp-contact-section section-padding fix">
        <div className="container">
          <div className="pp-contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="pp-contact-box-item">
                  <h3>Contact Informatlon</h3>
                  <div className="pp-contact-item">
                    <div className="pp-icon">
                      <i className="fa-regular fa-location-dot"></i>
                    </div>
                    <div className="pp-content">
                      <h4>Our Address</h4>
                      <p>Sector A, Aliganj, Lucknow, Uttar Pradesh, India, 226021</p>
                    </div>
                  </div>
                  <div className="pp-contact-item">
                    <div className="pp-icon">
                      <i className="fa-regular fa-phone-volume"></i>
                    </div>
                    <div className="pp-content">
                      <h4>Contact Number</h4>
                      <p>
                        <a href="tel:+919616253555">
                          +91 9616253555
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="pp-contact-item mb-0">
                    <div className="pp-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="pp-content">
                      <h4>Email Us</h4>
                      <p>
                        <a href="mailto:info@exmple.com">info@cloudemy.in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="pp-contact-content">
                  <h3>Ready to Get Started?</h3>
                  <form
                    action="https://ex-coders.com/html/cloudly/contact.php"
                    id="contact-form1"
                    method="POST"
                    className="pp-contact-form-items"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.5s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="form-clt">
                          <span>Your Name*</span>
                          <input
                            type="text"
                            name="name"
                            id="name331"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="text"
                            name="name"
                            id="email11"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".9s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.9s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="form-clt">
                          <span>Write Message*</span>
                          <textarea
                            name="message"
                            id="message1"
                            placeholder="Message Here"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <button type="submit" className="pp-theme-btn">
                          Send Message
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommonFooter />
    </>
  );
};

export default ContactUs;
