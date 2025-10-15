import { Link } from "react-router-dom";

const Body = () => {
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
                  <Link
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pp-brand-section section-padding pb-0 fix">
        <div className="container custom-container-3">
          <div className="brand-wrapper style-2">
            <div
              className="brand-title wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <h3>Millions of clients trust us.</h3>
            </div>
            <div className="swiper pp-brand-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-7faed03130cdd59c"
                aria-live="off"
                style={{
                  transform: "translate3d(-2520px, 0px, 0px)",
                  transitionDuration: "2000ms",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                  role="group"
                  aria-label="5 / 5"
                  data-swiper-slide-index="4"
                  style={{ width: "320px", marginRight: "100px" }}
                >
                  <div className="brand-image text-center">
                    <img src="assets/img/home-1/brand/05.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-active"
                  role="group"
                  aria-label="1 / 5"
                  data-swiper-slide-index="0"
                  style={{ width: "320px", marginRight: "100px" }}
                >
                  <div className="brand-image text-center">
                    <img src="assets/img/home-1/brand/01.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="2 / 5"
                  data-swiper-slide-index="1"
                  style={{ width: "320px", marginRight: "100px" }}
                >
                  <div className="brand-image text-center">
                    <img src="assets/img/home-1/brand/02.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 5"
                  data-swiper-slide-index="2"
                  style={{ width: "320px", marginRight: "100px" }}
                >
                  <div className="brand-image text-center">
                    <img src="assets/img/home-1/brand/03.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 5"
                  data-swiper-slide-index="3"
                  style={{ width: "320px", marginRight: "100px" }}
                >
                  <div className="brand-image text-center">
                    <img src="assets/img/home-1/brand/04.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                  role="group"
                  aria-label="5 / 5"
                  data-swiper-slide-index="4"
                  style={{ width: "320px", marginRight: "100px" }}
                >
                  <div className="brand-image text-center">
                    <img src="assets/img/home-1/brand/05.png" alt="img" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                  role="group"
                  aria-label="1 / 5"
                  data-swiper-slide-index="0"
                  style={{ width: "320px", marginRight: "100px" }}
                >
                  <div className="brand-image text-center">
                    <img src="assets/img/home-1/brand/01.png" alt="img" />
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
                        <Link to="/portfolio" className="pp-theme-btn">
                          Explore What We’ve Built
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
                        <Link to="/portfolio" className="pp-theme-btn">
                          Explore What We’ve Built
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
                        <Link to="/portfolio" className="pp-theme-btn">
                          Explore What We’ve Built
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
                    src="assets/img/home-1/about/about-1.jpg"
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
                  <div className="about-image-2">
                    <img src="assets/img/home-1/about/about-2.jpg" alt="img" />
                  </div>
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
                    <div className="count-text">
                      <h2>
                        <span className="pp-count">200</span>k+
                      </h2>
                      <p>Businesses worldwide</p>
                    </div>
                    <div className="count-text">
                      <h2>
                        <span className="pp-count">205</span>x
                      </h2>
                      <p>More ROI</p>
                    </div>
                    <div className="count-text">
                      <h2>
                        <span className="pp-count">2.5</span>k
                      </h2>
                      <p>Generated on average</p>
                    </div>
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
      <section className="pp-news-section-2 section-padding fix">
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
      </section>
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
                    src="assets/img/home-1/cta/cta-1.jpg"
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
                  <div className="pp-cta-image-2">
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
                  </div>
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
                    Want Marketing That Works for Your App?
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
                    In vestibulum dui a odio pharetra, nec accumsan sapien
                    consectetur. Pellentesque magna risus, volutpat a vestibulum
                    ut, tempus et quam.
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
                      Get Started
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
