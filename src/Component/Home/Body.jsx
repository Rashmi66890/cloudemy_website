import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  const brandImages = [
    "/assets/img/home-1/brand/android.png",
    "/assets/img/home-1/brand/react.png",
    "/assets/img/home-1/brand/flutter.png",
    "/assets/img/home-1/brand/node.png",
    "/assets/img/home-1/brand/python.png",
    "/assets/img/home-1/brand/dotnet.png",
    "/assets/img/home-1/brand/ios.png",
    "/assets/img/home-1/brand/html.png",
  ];
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <section className="pp-hero-section pp-hero-1 fix">
        <div className="top-shape">
          <img src="assets/img/home-1/hero/hero-bg.png" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="pp-hero-content">
                <h1
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationDelay: "0.3s",
                    animationName: "img-anim-left",
                  }}
                >
                  Beautiful Design
                  <br />
                  Powerfully Engineered
                  <br /> Seamlessly Experienced
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  We deliver end-to-end IT Solutions - scalable apps , engaging
                  websites and digital strategies - all built around seamless
                  user experience
                </p>
                <div className="pp-hero-button">
                  <Link
                    to="/contact"
                    className="pp-theme-btn wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Get Started Now
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                  {/* <Link
                    to="/portfolio"
                    className="pp-theme-btn pp-style-2 wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    See Our Work
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="pp-brand-section section-padding pb-0 fix">
        <div className="container custom-container-3">
          <div className="brand-wrapper style-2">
            <div className="brand-title wow fadeInUp" data-wow-delay=".3s">
              <h3>Powering Innovation with Modern Tech</h3>
            </div>

            <div className="swiper pp-brand-slider">
              <Slider {...settings}>
                {brandImages.map((src, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="brand-image text-center">
                      <img src={src} alt={`brand-${i}`} />
                    </div>
                  </div>
                ))}
              </Slider>
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
      {/* <section className="pp-how-work-section section-padding fix section-bg-2">
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
                <h3>Track, Analyze &amp; Optimize</h3>
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
      </section> */}
      <section className="pp-how-work-section section-padding fix section-bg-2">
        <div className="top-shape">
          <img src="assets/img/home-1/feature/bg-shape.png" alt="img" />
        </div>
        <div className="line-shape">
          <img src="assets/img/home-1/feature/line.png" alt="img" />
        </div>
        <div className="container">
          <div className="pp-section-title text-center">
            <span className="pp-sub-title wow fadeInUp">
              HOW IT WORKS <span className="pp-style-2"></span>
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Turning Ideas Into Scalable Solutions
            </h2>
          </div>

          <div className="row">
            {/* STEP 1 */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="pp-how-work-items">
                <h6>STEP-01</h6>
                <h3>Understand & Strategize</h3>
                <p>
                  We start by understanding your business goals and technical
                  needs, then create a clear development strategy aligned with
                  your vision.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="pp-how-work-items pp-style-2">
                <h6>STEP-02</h6>
                <h3>Design & Develop</h3>
                <p>
                  Our team builds modern, responsive, and scalable web or mobile
                  applications using the latest frameworks and best coding
                  practices.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="pp-how-work-items">
                <h6>STEP-03</h6>
                <h3>Test, Launch & Support</h3>
                <p>
                  After rigorous testing, we deploy your project smoothly and
                  provide ongoing maintenance and support for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-why-benefit-section section-padding fix section-bg">
        <div className="container">
          <div className="pp-section-title text-center">
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              Why Choose Us
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
              <div className="pp-why-benefit-item">
                <div className="pp-icon">
                  <img src="assets/img/home-2/icon/01.svg" alt="img" />
                </div>
                <div className="pp-content">
                  <h3>Experienced Team</h3>
                  <p>Skilled professionals with deep expertise.</p>
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
              <div className="pp-why-benefit-item">
                <div className="pp-icon">
                  <img src="assets/img/home-2/icon/02.svg" alt="img" />
                </div>
                <div className="pp-content">
                  <h3>End-to-End Solution</h3>
                  <p>Complete services from start to finish.</p>
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
              <div className="pp-why-benefit-item">
                <div className="pp-icon">
                  <img src="assets/img/home-2/icon/03.svg" alt="img" />
                </div>
                <div className="pp-content">
                  <h3>Agile & Flexible Delivery</h3>
                  <p>Fast, flexible, and highly adaptive project execution</p>
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
              <div className="pp-why-benefit-item">
                <div className="pp-icon">
                  <img src="assets/img/home-2/icon/04.svg" alt="img" />
                </div>
                <div className="pp-content">
                  <h3>Cutting-Edge Tech Stack</h3>
                  <p>Latest tools for optimal performance.</p>
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
              <div className="pp-why-benefit-item">
                <div className="pp-icon">
                  <img src="assets/img/home-2/icon/05.svg" alt="img" />
                </div>
                <div className="pp-content">
                  <h3>Proven Measure Result</h3>
                  <p>Demonstrated success and measurable impact</p>
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
              <div className="pp-why-benefit-item">
                <div className="pp-icon">
                  <img src="assets/img/home-2/icon/06.svg" alt="img" />
                </div>
                <div className="pp-content">
                  <h3>Customer-Centric Approach</h3>
                  <p>Solutions tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pp-pricing-section section-padding fix section-bg-2">
        <div className="top-shape">
          <img src="assets/img/home-1/feature/bg-shape.png" alt="img" />
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
              WHAT DRIVES US
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
              The Heart of our Work
            </h2>
          </div>
          <div className="pricing-two__tab">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="pt-1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pt-1"
                  type="button"
                  role="tab"
                  aria-controls="pt-1"
                  aria-selected="true"
                >
                  “We build digital products that inspire action and redefine
                  experiences.”
                </button>
              </div>
            </nav>
          </div>
          <div className="pricing__tab-content">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="pt-1"
                role="tabpanel"
                aria-labelledby="pt-1-tab"
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pp-pricing-main-item">
                      <div className="pp-pricing-card-item">
                        <div className="pp-pricing-header">
                          <h5>User-Centric Design</h5>
                        </div>
                        <ul className="pp-pricing-list">
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Research-driven approach
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Intuitive user flow
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Responsive layouts
                          </li>
                          <li className="pp-style-2">
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Prototype testing
                          </li>
                          <li className="pp-style-2">
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Smooth onboarding
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <Link to="#" className="pp-theme-btn">
                          {/* Explore What We’ve Built */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pp-pricing-main-item">
                      <div className="pp-pricing-card-item">
                        <div className="pp-pricing-header">
                          <h5>Scalability</h5>
                        </div>
                        <ul className="pp-pricing-list">
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Modular architecture
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Handles high load
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Cloud deployment
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Optimized backend
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Continuous updates
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <Link to="#" className="pp-theme-btn">
                          {/* Explore What We’ve Built */}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pp-pricing-main-item">
                      <div className="pp-pricing-card-item">
                        <div className="pp-pricing-header">
                          <h5>Beautiful UI/UX</h5>
                        </div>
                        <ul className="pp-pricing-list">
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Modern design
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Consistent branding
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Smooth animations
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Mobile friendly
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Engaging experience
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <Link to="#" className="pp-theme-btn">
                          {/* Explore What We’ve Built */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pt-2"
                role="tabpanel"
                aria-labelledby="pt-2-tab"
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pp-pricing-main-item">
                      <div className="pp-pricing-card-item">
                        <div className="pp-pricing-header">
                          <h5>Starter</h5>
                          <h2>
                            $14.9<span>/ Per Month</span>
                          </h2>
                        </div>
                        <ul className="pp-pricing-list">
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Basic campaign builder
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            1 user account
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Up to 500 contacts
                          </li>
                          <li className="pp-style-2">
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Basic analytics
                          </li>
                          <li className="pp-style-2">
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Email support
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <Link to="/contact" className="pp-theme-btn">
                          Get You Free plan
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pp-pricing-main-item">
                      <div className="pp-pricing-card-item">
                        <div className="pp-pricing-header">
                          <h5>Professional</h5>
                          <h2>
                            $29<span>/ Per Month</span>
                          </h2>
                        </div>
                        <ul className="pp-pricing-list">
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            All Starter features
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Unlimited contacts
                          </li>

                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            A/B testing tools
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Automation workflows
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Social media scheduling
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Priority email support
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <Link to="/contact" className="pp-theme-btn">
                          Get You Free plan
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pp-pricing-main-item">
                      <div className="pp-pricing-card-item">
                        <div className="pp-pricing-header">
                          <h5>Basic Plan</h5>
                          <h2>
                            $14.9<span>/ Per Month</span>
                          </h2>
                        </div>
                        <ul className="pp-pricing-list">
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            All Professional features
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            AI-powered recommendations
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak.svg"
                              alt="img"
                            />
                            Maximum of 5 collaborators
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Maximum of 5 collaborators
                          </li>
                          <li>
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Maximum of 5 collaborators
                          </li>
                          <li className="pp-style-2">
                            <img
                              src="assets/img/home-1/icon/cheak-2.svg"
                              alt="img"
                            />
                            Maximum of 5 collaborators
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-button">
                        <Link to="/contact" className="pp-theme-btn">
                          Get You Free plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pp-about-section section-padding fix">
        <div className="container">
          <div className="pp-about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <img
                    src="assets/img/home-1/about/about1234.png"
                    alt="img"
                    className="wow img-custom-anim-left"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1.3s",
                      animationDelay: "0.3s",
                      animationName: "img-anim-left",

                    }}
                  />
                  {/* <div className="about-image-2">
                    <img src="assets/img/home-1/about/about-1.jpg" alt="img" />
                  </div> */} 
                  <div className="about-shape">
                    <img src="assets/img/home-1/about/shape-1.png" alt="img" />
                  </div>                       
                  <div className="circle-shape">
                    <img src="assets/img/home-1/about/shape-2.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="pp-section-title mb-0">
                    <span
                      className="pp-sub-title wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      IMPACT OF OUR WORK
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
                      Turning Small Ideas into Big Realities
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
                    Every great achievement starts with a simple idea.
                    <br />
                    We transform those ideas into impactful projects that reach
                    millions.
                  </p>
                  <div
                    className="about-count-item wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="count-text" style={{marginLeft:"50px"}}>
                      <h2>
                        <span className="pp-count">56</span>+
                      </h2>
                      <p>Projects Completed</p>
                    </div>
                    <div className="count-text">
                      <h2>
                        <span className="pp-count">29</span>+
                      </h2>
                      <p>Happy Clients</p>
                    </div>
                    <div className="count-text">
                      <h2>
                        <span className="pp-count">4.7</span>*
                      </h2>
                      <p>Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section-3 fix section-padding section-bg">
        <div className="container">
          <div className="pp-section-title text-center">
            <span
              className="pp-sub-title pp-style-border  wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Client Testimonials
            </span>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animatioName: "fadeInUp",
              }}
            >
              Latest Client Feedback
            </h2>
          </div>
          <div className="swiper pp-testimonial-slider-3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-8ed79f21f390e0a7"
              aria-live="off"
              style={{
                transitionDuration: "3000ms",
                transform: "translate3d(-1893.33px, 0px, 0px)",
              }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>
                    it's a new way to earn. The app makes it easy for small
                    stores to earn commission on everyday bill payments like
                    electricity, mobile recharges, DTH and more. It’s simple to
                    use, and signup takes only a moment."
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-3.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Aditya Awaze</h4>
                      <span>BillNest</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Great work! We reviewed the app, and everything looks
                    excellent. The app loads quickly, navigation is smooth, and
                    overall performance is impressive. Thanks a lot for the
                    effort — we’re really happy with the results!
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-4.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Kajal Jain</h4>
                      <span>BillNest</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="2"
                role="group"
                aria-label="3 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Outstanding work by the team! The website not only looks
                    great but also performs exceptionally well. The product
                    listing and checkout experience are seamless, and our
                    customers have already noticed the improvement.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-5.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Abhishek Verma</h4>
                      <span>Saz-Cars</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-active"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    it's a new way to earn. The app makes it easy for small
                    stores to earn commission on everyday bill payments like
                    electricity, mobile recharges, DTH and more. It’s simple to
                    use, and signup takes only a moment."
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-3.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Aditya Awaze</h4>
                      <span>BillNest</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-next"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Great work! We reviewed the app, and everything looks
                    excellent. The app loads quickly, navigation is smooth, and
                    overall performance is impressive. Thanks a lot for the
                    effort — we’re really happy with the results!
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-4.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Kajal Jain</h4>
                      <span>BillNest</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                data-swiper-slide-index="2"
                role="group"
                aria-label="3 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Outstanding work by the team! The website not only looks
                    great but also performs exceptionally well. The product
                    listing and checkout experience are seamless, and our
                    customers have already noticed the improvement.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-5.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Abhishek Verma</h4>
                      <span>Saz-Cars</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    it's a new way to earn. The app makes it easy for small
                    stores to earn commission on everyday bill payments like
                    electricity, mobile recharges, DTH and more. It’s simple to
                    use, and signup takes only a moment."
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-3.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Aditya Awaze</h4>

                      <span>BillNest</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Great work! We reviewed the app, and everything looks
                    excellent. The app loads quickly, navigation is smooth, and
                    overall performance is impressive. Thanks a lot for the
                    effort — we’re really happy with the results!
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-4.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Kajal Jain</h4>
                      <span>BillNest</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="2"
                role="group"
                aria-label="3 / 3"
                style={{ width: "358.667px", marginRight: "20px" }}
              >
                <div className="pp-testimonial-box-items-3">
                  <div className="pngwing-shape">
                    <img
                      src="assets/img/home-3/testimonial/pngwing-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Outstanding work by the team! The website not only looks
                    great but also performs exceptionally well. The product
                    listing and checkout experience are seamless, and our
                    customers have already noticed the improvement.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage:
                          "url('/assets/img/home-3/testimonial/client-5.jpg')",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Abhishek Verma</h4>
                      <span>Saz-Cars</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-dot-3 mt-5">
              <div className="dot swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 1"
                  aria-current="true"
                ></span>
                <span
                  className="swiper-pagination-bullet"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 2"
                ></span>
                <span
                  className="swiper-pagination-bullet"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 3"
                ></span>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>
      {/* <section className="pp-news-section-2 section-padding fix">
        <div className="container">
          <div className="pp-section-title text-center">
            <span
              className="pp-sub-title pp-style-border wow fadeInUp"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
              }}
            >
              Our Blog
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
              Latest Posts and Articles
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
              <Link to="/blog-details">
                <div className="pp-news-card-item-2">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-1.jpg" alt="img" />
                    <span>Smart Business</span>
                  </div>
                  <div className="pp-news-content">
                    <h3>Work Smarter: Tools Driving the Future</h3>
                    <ul className="news-post">
                      <li>
                        <i className="fa-regular fa-user"></i>
                        By Admin
                      </li>
                      <li className="pp-style-2">
                        <i className="fa-regular fa-calendar-days"></i>
                        Sep 30, 2025
                      </li>
                    </ul>
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
              <Link to="/blog-details">
                <div className="pp-news-card-item-2">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-2.jpg" alt="img" />
                    <span>Business</span>
                  </div>
                  <div className="pp-news-content">
                    <h3>Elevating Marketing with Next-Gen Solutions</h3>
                    <ul className="news-post">
                      <li>
                        <i className="fa-regular fa-user"></i>
                        By Admin
                      </li>
                      <li className="pp-style-2">
                        <i className="fa-regular fa-calendar-days"></i>
                        Sep 30, 2025
                      </li>
                    </ul>
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
              <Link to="/blog-details">
                <div className="pp-news-card-item-2">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-3.jpg" alt="img" />
                    <span>Benefits</span>
                  </div>
                  <div className="pp-news-content">
                    <h3>Clearing Up Automation Misunderstandings</h3>
                    <ul className="news-post">
                      <li>
                        <i className="fa-regular fa-user"></i>
                        By Admin
                      </li>
                      <li className="pp-style-2">
                        <i className="fa-regular fa-calendar-days"></i>
                        Sep 30, 2025
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pp-cta-section section-padding fix theme-bg">
        <div className="top-shape">
          <img src="assets/img/home-1/cta/bg.png" alt="img" />
        </div>
        <div className="container">
          <div className="pp-cta-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="pp-cta-image">
                  <img
                    src="assets/img/home-1/cta/ctaa.jpg"
                    alt="img"
                    className="wow img-custom-anim-top"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDuration: "1.3s",
                      animationDelay: "0.3s",
                      animationName: "img-anim-top",
                    }}
                  />
                  {/* <div className="pp-cta-image-2">
                    <img
                      src="assets/img/home-1/cta/cta-2.jpg"
                      alt="img"
                      className="wow img-custom-anim-right"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDuration: "1.3s",
                        animationDelay: "0.3s",
                        animationName: "img-anim-right",
                      }}
                    />
                  </div> */}
                  <div className="pp-shape float-bob-y">
                    <img src="assets/img/home-1/cta/shape-1.jpg" alt="img" />
                  </div>
                  <div className="pp-shape-2 float-bob-y">
                    <img src="assets/img/home-1/cta/shape-2.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pp-cta-content">
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Ready to build your next big idea?
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    From concept to launch, we help you turn your vision into a
                    powerful digital product. Whether it’s a mobile app,
                    website, or custom platform — our team delivers fast,
                    reliable, and scalable solutions tailored to your goals.
                  </p>
                  <div className="pp-cta-button">
                    <Link
                      to="/contact"
                      className="pp-theme-btn wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      Let’s Get Started
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
