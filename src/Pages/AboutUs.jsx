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
                      Transforming Vision into Digital Excellence
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
                    At Cloudemy, we partner with businesses to architect
                    innovative digital solutions that drive measurable growth
                    and competitive advantage. As a specialized IT solutions
                    provider, we combine strategic thinking with technical
                    expertise to deliver transformative results.
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
                        Enterprise-Grade Technology
                      </h6>
                      <p>
                        Our technical foundation is built on scalability,
                        security, and performance. Whether you're a growing
                        startup or an established enterprise, we architect
                        robust web applications, native mobile solutions, and
                        cloud-native backends engineered to handle demanding
                        workloads while maintaining exceptional user
                        experiences.
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
                        Intelligent Automation
                      </h6>
                      <p>
                        We design and implement sophisticated automation
                        frameworks that optimize operational efficiency. Our
                        solutions eliminate manual bottlenecks, minimize errors,
                        and free your team to focus on strategic initiatives.
                        Leveraging AI and machine learning, we turn complex
                        workflows into streamlined, intelligent processes.
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
                        Results-Driven Partnership
                      </h6>
                      <p>
                        Success is measured in outcomes. We align our work with
                        your key performance indicators, focusing on solutions
                        that deliver tangible ROI—whether that's increased
                        revenue, improved efficiency, enhanced user engagement,
                        or faster time to market.
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
                      Why Choose Us?
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
                    To be recognized globally as a premier technology
                    partner—delivering digital solutions that seamlessly blend
                    aesthetic excellence with business intelligence, driving
                    sustainable growth for organizations across industries.
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
                    <li>Proven Expertise </li>
                    <li>End-to-End Solution</li>
                    <li>Agile & Transparent </li>
                    <li>Quality Assurance</li>
                    <li>Long-Term Partnership </li>
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
                        Automation
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
                      Industries We Serve
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
                    Our developers build robust, scalable solutions using
                    cutting-edge technologies and best coding practices
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
                    <li>E-Commerce & Retail</li>
                    <li>Healthcare & MedTech</li>
                    <li>Financial Service</li>
                    <li>Education & E-Learning</li>
                    <li>SaaS & Startups</li>
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
