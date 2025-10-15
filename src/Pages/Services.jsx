import CommonFooter from "../Component/PagesFooter/CommonFooter.jsx";
import Header from "../Component/Home/Header.jsx";
import AboveHeader from "../Component/Home/AboveHeader.jsx";
import { Link } from "react-router-dom";

const Services = () => {
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
                Services
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="pp-offer-section section-padding fix section-bg">
        <div className="container">
          <div className="pp-section-title text-center">
            <span
              className="pp-sub-title wow fadeInUp"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
              }}
            >
              WHAT WE OFFER
              <span className="pp-style-2"></span>
            </span>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              Our Key Services
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <Link to={`/service-details?service=App%20Development`}>
                <div className="pp-offer-box-item">
                  <div className="pp-offer-icon">
                    <img src="assets/img/home-1/icon/01.svg" alt="img" />
                  </div>
                  <div className="pp-offer-content">
                    <h3>App Development</h3>
                    <p>
                      Build seamless, high-performing mobile apps for
                      businesses.
                    </p>
                  </div>
                </div>
              </Link>
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
              <Link to={`/service-details?service=Web%20Development`}>
                <div className="pp-offer-box-item">
                  <div className="pp-offer-icon">
                    <img src="assets/img/home-1/icon/02.svg" alt="img" />
                  </div>
                  <div className="pp-offer-content">
                    <h3>Web Development</h3>
                    <p>Create fast, responsive, and scalable web solutions.</p>
                  </div>
                </div>
              </Link>
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
              <Link
                to={`/service-details?service=${encodeURIComponent(
                  "API & Backend Solution"
                )}`}
              >
                <div className="pp-offer-box-item">
                  <div className="pp-offer-icon">
                    <img src="assets/img/home-1/icon/03.svg" alt="img" />
                  </div>
                  <div className="pp-offer-content">
                    <h3>API & Backend Solution</h3>
                    <p>Power your apps with robust backend systems and APIs.</p>
                  </div>
                </div>
              </Link>
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
              <Link
                to={`/service-details?service=${encodeURIComponent(
                  "SEO & Digital Marketing"
                )}`}
              >
                <div className="pp-offer-box-item">
                  <div className="pp-offer-icon">
                    <img src="assets/img/home-1/icon/03.svg" alt="img" />
                  </div>
                  <div className="pp-offer-content">
                    <h3>SEO & Digital Marketing </h3>
                    <p>
                      Grow your reach and improve online visibility effectively.
                    </p>
                  </div>
                </div>
              </Link>
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
              <Link
                to={`/service-details?service=${encodeURIComponent(
                  "UI/UX Design"
                )}`}
              >
                <div className="pp-offer-box-item">
                  <div className="pp-offer-icon">
                    <img src="assets/img/home-1/icon/03.svg" alt="img" />
                  </div>
                  <div className="pp-offer-content">
                    <h3>UI/UX Design</h3>
                    <p>
                      Craft beautiful, intuitive, and user-friendly digital
                      interfaces.
                    </p>
                  </div>
                </div>
              </Link>
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
              <Link
                to={`/service-details?service=${encodeURIComponent(
                  "Maintenance & Support"
                )}`}
              >
                <div className="pp-offer-box-item">
                  <div className="pp-offer-icon">
                    <img src="assets/img/home-1/icon/03.svg" alt="img" />
                  </div>
                  <div className="pp-offer-content">
                    <h3>Maintenance & Support</h3>
                    <p>
                      Improve ongoing updates, monitoring, and technical
                      support.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pp-feature-section-2 section-padding fix bg-cover"
        style={{ backgroundImage: "url(assets/img/home-2/feature/bg.jpg)" }}
      >
        <div className="container">
          <div className="pp-feature-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="pp-feature-content">
                  <div className="pp-section-title mb-0">
                    <span
                      className="pp-sub-title text-white pp-style-border wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      The Upshift Hub
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      Experience the Next Smart Work with The Upshift
                    </h2>
                  </div>
                  <p
                    className="pp-text wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Duis congue eget neque sit amet mollis. Aliquam auctor diam
                    sit amet efficitur condimentum. Aliquam vitae scelerisque
                    leo, eu vulputate felis. Donec et tristique nisl. Ut
                    bibendum vehicula elit a consequat.
                  </p>
                 
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pp-feature-image">
                  <img
                    src="assets/img/home-2/feature/01.jpg"
                    alt="img"
                    className="wow img-custom-anim-right"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "img-anim-right",
                      animationDuration: "1.3s",
                    }}
                  />
                  <div className="pp-feature-image-2 float-bob-y">
                    <img src="assets/img/home-2/feature/02.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pp-testimonial-section section-padding fix">
        <div className="container">
          <div className="pp-section-title-area">
            <div className="pp-section-title">
              <span
                className="pp-sub-title wow fadeInUp"
                style={{
                  visibility: "visible",
                  animationName: "fadeInUp",
                }}
              >
                TESTIMONIALS
              </span>
              <h2
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                Success Stories from Our Users
              </h2>
            </div>
            <div
              className="pp-array-buttons wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <button
                className="array-prev"
                tabindex="0"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-a3aac8c91010778244"
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </button>
              <button
                className="array-next"
                tabindex="0"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-a3aac8c91010778244"
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
          <div className="swiper pp-testimonial-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-a3aac8c91010778244"
              aria-live="off"
              style={{
                transform: "translate3d(-2432px, 0px, 0px)",
                transitionDuration: "2000ms",
              }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate"
                role="group"
                aria-label="1 / 2"
                data-swiper-slide-index="0"
                style={{ width: "508px", marginRight: "100px" }}
              >
                <div className="pp-testimonial-card">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer fermentum, turpis id bibendum efficitur, arcu nunc
                    pellentesque arcu, nec condimentum eros erat nec orci.
                    Maecenas pretium.”
                  </p>
                  <div className="pp-client-info-item">
                    <div className="pp-client-image">
                      <img
                        src="assets/img/home-1/testimonial/client-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="pp-content">
                      <h5>Kristin Watson</h5>
                      <span>Digital Strategist at Nova Agency</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                role="group"
                aria-label="2 / 2"
                data-swiper-slide-index="1"
                style={{ width: "508px", marginRight: "100px" }}
              >
                <div className="pp-testimonial-card">
                  <p>
                    “Mauris vehicula iaculis turpis, vel luctus lacus dapibus
                    rhoncus. Nullam dignissim eros ut elit luctus, a ullamcorper
                    risus tristique. Donec imperdiet elit at mi commodo, id
                    consequat diam venenatis.”
                  </p>
                  <div className="pp-client-info-item">
                    <div className="pp-client-image">
                      <img
                        src="assets/img/home-1/testimonial/client-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="pp-testimonial-content">
                      <h5>Guy Hawkins</h5>
                      <span>Marketing Manager at GrowFast Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-active"
                role="group"
                aria-label="1 / 2"
                data-swiper-slide-index="0"
                style={{ width: "508px", marginRight: "100px" }}
              >
                <div className="pp-testimonial-card">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer fermentum, turpis id bibendum efficitur, arcu nunc
                    pellentesque arcu, nec condimentum eros erat nec orci.
                    Maecenas pretium.”
                  </p>
                  <div className="pp-client-info-item">
                    <div className="pp-client-image">
                      <img
                        src="assets/img/home-1/testimonial/client-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="pp-content">
                      <h5>Kristin Watson</h5>
                      <span>Digital Strategist at Nova Agency</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                role="group"
                aria-label="2 / 2"
                data-swiper-slide-index="1"
                style={{ width: "508px", marginRight: "100px" }}
              >
                <div className="pp-testimonial-card">
                  <p>
                    “Mauris vehicula iaculis turpis, vel luctus lacus dapibus
                    rhoncus. Nullam dignissim eros ut elit luctus, a ullamcorper
                    risus tristique. Donec imperdiet elit at mi commodo, id
                    consequat diam venenatis.”
                  </p>
                  <div className="pp-client-info-item">
                    <div className="pp-client-image">
                      <img
                        src="assets/img/home-1/testimonial/client-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="pp-testimonial-content">
                      <h5>Guy Hawkins</h5>
                      <span>Marketing Manager at GrowFast Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                role="group"
                aria-label="1 / 2"
                data-swiper-slide-index="0"
                style={{ width: "508px", marginRight: "100px" }}
              >
                <div className="pp-testimonial-card">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer fermentum, turpis id bibendum efficitur, arcu nunc
                    pellentesque arcu, nec condimentum eros erat nec orci.
                    Maecenas pretium.”
                  </p>
                  <div className="pp-client-info-item">
                    <div className="pp-client-image">
                      <img
                        src="assets/img/home-1/testimonial/client-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="pp-content">
                      <h5>Kristin Watson</h5>
                      <span>Digital Strategist at Nova Agency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </section>

      <CommonFooter />
    </>
  );
};

export default Services;
