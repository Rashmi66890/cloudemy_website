import React from "react";
import AboveHeader from "../Component/Home/AboveHeader";
import Header from "../Component/Home/Header";
import CommonFooter from "../Component/PagesFooter/CommonFooter";

const Career = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                Careers
              </h1>
            </div>
          </div>
        </div>
      </div>
    
      <div className="row customrow">
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div
            className="pp-details-box"
            onClick={() => scrollToSection("why-join-us")}
          >
            <div className="pp-content">
              <h5 style={{ color: "white" }}>Why join us</h5>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div
            className="pp-details-box"
            onClick={() => scrollToSection("current-opening")}
          >
            <div className="pp-content">
              <h5 style={{ color: "white" }}>Current Opening</h5>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div
            className="pp-details-box"
            onClick={() => scrollToSection("our-office")}
          >
            <div className="pp-content">
              <h5 style={{ color: "white" }}>Our Office</h5>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6">
          <div
            className="pp-details-box"
            onClick={() => scrollToSection("meet-people")}
          >
            <div className="pp-content">
              <h5 style={{ color: "white" }}>Meet our people</h5>
            </div>
          </div>
        </div>
      </div>

      <section className="pp-project-details-section section-padding fix" >
        <div className="container"id="why-join-us">
          <div className="pp-project-details-wrapper">
            <div className="row g-4" >
              <div className="pp-project-details-content">
                <h3>Ready To Speak Brilliance</h3>
                <p>
                  We believe that real growth begins with empowering people. Our
                  environment is built to spark curiosity, innovation, and
                  confidence — helping every individual unlock their true
                  potential. We are dedicated to creating meaningful careers
                  where talent is recognized, ideas are valued, and learning
                  never stops. As a forward-thinking company, we continuously
                  adapt to industry trends, ensuring our team stays ahead in a
                  rapidly evolving world. Whether it’s through hands-on
                  experience, supportive leadership, or opportunities to explore
                  new skills, we make sure our people feel inspired every day.
                  When our team thrives, our clients thrive — and that’s the
                  foundation of Cloudemy’s success.
                </p>

                <div className="pp-project-sideber">
                  <div className="pp-sidebr-content">
                    <div className="pp-icon">
                      <img src="assets/img/inner-page/icon/04.svg" alt="img" />
                    </div>
                    <p>
                      At Cloudemy, you’ll supercharge your potential. You’ll
                      find your career. And you’ll find your spark. All at a
                      place that knows that helping our clients stay on top
                      starts by putting our people first.
                    </p>
                  </div>
                  <h3>
                    <a>– CLOUDEMY</a>
                  </h3>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="pp-project-details-image">
                  <img
                    src="assets/img/inner-page/project/details-1.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container " id="our-office">
          <div className="pp-project-details-wrapper">
            <div className="row g-4" >
              <div className="pp-project-details-content">
                <h3> Our Office </h3>
                <p>
                  At Cloudemy, we encourage every person to find their spark.
                  When someone shares an idea, we listen. When someone leads a
                  project, the team stands behind them. Every voice matters
                  here, and every contribution helps us grow. At Cloudemy, we
                  create an environment where talent is supported, innovation is
                  welcomed, and people feel empowered to build their best
                  future.
                </p>
              </div>
              <div className="col-xl-12"></div>
            </div>
          </div>
        </div>
        <div className="pp-instagram-wrapper">
          <div className="swiper pp-instagram-banner-slider swiper-initialized swiper-horizontal swiper-pointer-events">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-9644d67ca6ebd2ff"
              aria-live="off"
              style={{
                transform: "translate3d(-2776px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={0}
                role="group"
                aria-label="1 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/01.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={1}
                role="group"
                aria-label="2 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/02.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={2}
                role="group"
                aria-label="3 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/03.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={3}
                role="group"
                aria-label="4 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/04.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index={4}
                role="group"
                aria-label="5 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/05.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-active"
                data-swiper-slide-index={0}
                role="group"
                aria-label="1 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/01.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-next"
                data-swiper-slide-index={1}
                role="group"
                aria-label="2 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/02.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={2}
                role="group"
                aria-label="3 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/03.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-swiper-slide-index={3}
                role="group"
                aria-label="4 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/04.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                data-swiper-slide-index={4}
                role="group"
                aria-label="5 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/05.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                data-swiper-slide-index={0}
                role="group"
                aria-label="1 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/01.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                data-swiper-slide-index={1}
                role="group"
                aria-label="2 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/02.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={2}
                role="group"
                aria-label="3 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/03.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={3}
                role="group"
                aria-label="4 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/04.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index={4}
                role="group"
                aria-label="5 / 5"
                style={{ width: "247.6px", marginRight: 30 }}
              >
                <div className="pp-instagram-banner-items">
                  <div className="pp-banner-image">
                    <img
                      src="assets/img/inner-page/instagram/05.jpg"
                      alt="insta-img"
                    />
                    <a href="index.html" className="icon">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>

      

        <div className="container cusabcde">
          <div className="pp-project-details-wrapper">
            <div className="row g-4" id="meet-people">
              <div className="pp-project-details-content">
                <h3>Meet Our People </h3>
                <p>
                  At Cloudemy, we encourage every person to find their spark.
                  When someone shares an idea, we listen. When someone leads a
                  project, the team stands behind them. Every voice matters
                  here, and every contribution helps us grow. At Cloudemy, we
                  create an environment where talent is supported, innovation is
                  welcomed, and people feel empowered to build their best
                  future.
                </p>
              </div>
              <div className="col-xl-12"></div>
            </div>
          </div>
        </div>

        <section className="pp-team-section section-padding fix">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-team-card-item">
                  <div className="pp-team-image">
                    <img src="assets/img/inner-page/team/01.png" alt="img" />
                  </div>
                  <div className="pp-team-content">
                    <h3>
                      <a href="team-details.html">Sohel Tanvir</a>
                    </h3>
                    <p>co-Founder</p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-team-card-item">
                  <div className="pp-team-image">
                    <img src="assets/img/inner-page/team/02.png" alt="img" />
                  </div>
                  <div className="pp-team-content">
                    <h3>
                      <a href="team-details.html">Tonya Martin</a>
                    </h3>
                    <p>co-Founder</p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-team-card-item">
                  <div className="pp-team-image">
                    <img src="assets/img/inner-page/team/03.png" alt="img" />
                  </div>
                  <div className="pp-team-content">
                    <h3>
                      <a href="team-details.html">Stephan Bullok</a>
                    </h3>
                    <p>HR manager</p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-team-card-item">
                  <div className="pp-team-image">
                    <img src="assets/img/inner-page/team/04.png" alt="img" />
                  </div>
                  <div className="pp-team-content">
                    <h3>
                      <a href="team-details.html">Dianne Russell</a>
                    </h3>
                    <p>co-Founder</p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-team-card-item">
                  <div className="pp-team-image">
                    <img src="assets/img/inner-page/team/05.png" alt="img" />
                  </div>
                  <div className="pp-team-content">
                    <h3>
                      <a href="team-details.html">Annette Black</a>
                    </h3>
                    <p>co-Founder</p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="pp-team-card-item">
                  <div className="pp-team-image">
                    <img src="assets/img/inner-page/team/06.png" alt="img" />
                  </div>
                  <div className="pp-team-content">
                    <h3>
                      <a href="team-details.html">Jacob Jones</a>
                    </h3>
                    <p>HR manager</p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <CommonFooter />
    </>
  );
};

export default Career;
