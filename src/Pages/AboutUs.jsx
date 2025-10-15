import AboveHeader from "../Component/Home/AboveHeader.jsx";
import Header from "../Component/Home/Header.jsx";
import CommonFooter from "../Component/PagesFooter/CommonFooter.jsx";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="pp-about-section section-padding fix">
        <div className="container">
          <div className="pp-about-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="pp-about-content">
                  <div className="pp-section-title mb-0">
                    <span
                      className="pp-sub-title pp-style-border wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      Who We Are
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
                      Crafting Ideas into Digital Impact
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
                    In vestibulum dui a odio pharetra, nec accumsan sapien
                    consectetur. Pellentesque magna risus, volutpat a vestibulum
                    ut, tempus et quam. Nulla vitae erat blandit, mattis nisl
                    ut, venenatis enim. Maecenas tempus arcu tincidunt.
                  </p>
                  <div className="pp-about-item">
                    <div
                      className="pp-about-text wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <h6>
                        <img src="assets/img/home-1/icon/cheak.svg" alt="img" />
                        Smart Automation
                      </h6>
                      <p>
                        Streamline repetitive tasks and workflows with
                        intelligent automation tools.
                      </p>
                    </div>
                    <div
                      className="pp-about-text wow fadeInUp"
                      data-wow-delay=".5s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <h6>
                        <img src="assets/img/home-1/icon/cheak.svg" alt="img" />
                        Powerful Automation
                      </h6>
                      <p>
                        Donec eu hendrerit lorem. In ultrices erat pulvinar
                        venenatis auctor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pp-about-image">
                  <img
                    src="assets/img/home-2/about/01.png"
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
                  <div className="pp-blur-shape">
                    <img
                      src="assets/img/home-2/about/blur-shape.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pp-how-work-section section-padding fix section-bg-2">
        <div className="top-shape">
          <img src="assets/img/home-1/feature/bg-shape.png" alt="img" />
        </div>
        <div className="line-shape">
          <img src="assets/img/home-1/feature/line.png" alt="img" />
        </div>
        <div className="container">
          <div className="pp-section-title text-center">
            <span
              className="pp-sub-title wow fadeInUp"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
              }}
            >
              HOW IT WORKS
              <span className="pp-style-2"></span>
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
              Marketing Made Simple
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
              <div className="pp-how-work-items">
                <h6>STEP-01</h6>
                <h3> Track, Analyze &amp; Optimize</h3>
                <p>
                  Aenean id est pellentesque, consequat sem et, viverra lacus.
                  Aliquam tincidunt.
                </p>
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
              <div className="pp-how-work-items pp-style-2">
                <h6>STEP-02</h6>
                <h3>Insight. Action. Results.</h3>
                <p>
                  Mauris dignissim vel augue vel congue. Pellentesque sit amet
                  metus tortor hendrerit.
                </p>
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
              <div className="pp-how-work-items">
                <h6>STEP-03</h6>
                <h3>Monitor, Measure &amp; Improve</h3>
                <p>
                  Donec eu hendrerit lorem. In ultrices erat pulvinar venenatis
                  auctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pp-key-feature-section section-padding pb-0 fix">
        <div className="container">
          <div className="pp-key-feature-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="pp-key-feature-image">
                  <img src="assets/img/home-1/feature/02.jpg" alt="img" />
                  <div className="pp-key-feature-image-2 float-bob-y">
                    <img src="assets/img/home-1/feature/01.jpg" alt="img" />
                  </div>
                  <div className="pp-key-feature-image-3 float-bob-y">
                    <img src="assets/img/home-1/feature/03.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pp-key-feature-content">
                  <div className="pp-section-title mb-0">
                    <span
                      className="pp-sub-title wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      KEY FEATURES
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
                      Intuitive Campaign Editor
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
                    leo, eu vulputate felis.
                  </p>
                  <ul
                    className="pp-feature-list wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <li>Intuitive Drag &amp; Drop Editor</li>
                    <li>Mobile-Responsive Design</li>
                    <li>Undo/Redo &amp; Version History</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pp-testimonial-section section-padding fix bg-cover"
        style={{ backgroundImage: "url(assets/img/home-2/testimonial-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="swiper pp-testimonial-slider-2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-cfe1c36152c10f54c"
                  aria-live="off"
                  style={{
                    transitionDuration: "0ms",
                    transform: "translate3d(-3078px, 0px, 0px)",
                  }}
                >
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 2"
                    style={{ width: "926px", marginRight: "100px" }}
                  >
                    <div className="pp-testimonial-item-2">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        Our Smart Features Make Complex Tasks Simple and Save
                        You Hours Every Week with Real-Time Insights and
                        Automation.
                      </p>
                      <h3>Marc Delalonde</h3>
                      <span>Co-Founder - Penida</span>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate-active"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 2"
                    style={{ width: "926px", marginRight: "100px" }}
                  >
                    <div className="pp-testimonial-item-2">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        Our Smart Features Make Complex Tasks Simple and Save
                        You Hours Every Week with Real-Time Insights and
                        Automation.
                      </p>
                      <h3>Marc Delalonde</h3>
                      <span>Co-Founder - Penida</span>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 2"
                    style={{ width: "926px", marginRight: "100px" }}
                  >
                    <div className="pp-testimonial-item-2">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        Our Smart Features Make Complex Tasks Simple and Save
                        You Hours Every Week with Real-Time Insights and
                        Automation.
                      </p>
                      <h3>Marc Delalonde</h3>
                      <span>Co-Founder - Penida</span>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 2"
                    style={{ width: "926px", marginRight: "100px" }}
                  >
                    <div className="pp-testimonial-item-2">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        Our Smart Features Make Complex Tasks Simple and Save
                        You Hours Every Week with Real-Time Insights and
                        Automation.
                      </p>
                      <h3>Marc Delalonde</h3>
                      <span>Co-Founder - Penida</span>
                    </div>
                  </div>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pp-key-feature-section section-padding fix">
        <div className="container">
          <div className="pp-key-feature-wrapper pp-style-2">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="pp-key-feature-content">
                  <div className="pp-section-title mb-0">
                    <span
                      className="pp-sub-title wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      KEY FEATURES
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
                      Data-Backed AI Insights
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
                    Donec eu hendrerit lorem. In ultrices erat pulvinar
                    venenatis auctor. Fusce porta massa sit amet leo rutrum, id
                    imperdiet diam pretium. quis lacinia dui.
                  </p>
                  <ul
                    className="pp-feature-list wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <li>Intuitive Drag &amp; Drop Editor</li>
                    <li>Mobile-Responsive Design</li>
                    <li>Undo/Redo &amp; Version History</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pp-key-feature-image">
                  <img src="assets/img/home-1/feature/06.jpg" alt="img" />
                  <div className="pp-key-feature-image-2 float-bob-y">
                    <img src="assets/img/home-1/feature/04.jpg" alt="img" />
                  </div>
                  <div className="pp-key-feature-image-3 float-bob-y">
                    <img src="assets/img/home-1/feature/05.jpg" alt="img" />
                  </div>
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

export default AboutUs;
