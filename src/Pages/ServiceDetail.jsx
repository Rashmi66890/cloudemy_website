import Header from "../Component/Home/Header.jsx";
import AboveHeader from "../Component/Home/AboveHeader.jsx";
import CommonFooter from "../Component/PagesFooter/CommonFooter.jsx";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ServiceDetail = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState("App Development");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get("service");
    if (service) setActiveService(service);
  }, [location.search]);
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
                Service Details
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="pp-service-details-section section-padding">
        <div className="container">
          <div className="pp-service-details-wrapper">
            <div className="row g-5">
              <div className="col-12 col-lg-4">
                <div className="pp-main-sidebar sticky-style">
                  <div className="pp-single-sidebar-widget">
                    <div className="wid-title">
                      <h3>All Services</h3>
                    </div>
                    {/* <div className="pp-service-widget-categories">
                      <ul>
                        <li
                          className={activeService === "app" ? "active" : ""}
                          onClick={() => setActiveService("app")}
                        >
                          <a>App Development</a>
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </li>
                        <li
                          className={activeService === "web" ? "active" : ""}
                          onClick={() => setActiveService("web")}
                        >
                          <a>Web Development</a>
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </li>
                        <li
                          className={activeService === "api" ? "active" : ""}
                          onClick={() => setActiveService("api")}
                        >
                          <a>API & Backend Solution</a>
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </li>
                        <li
                          className={activeService === "seo" ? "active" : ""}
                          onClick={() => setActiveService("seo")}
                        >
                          <a>SEO & Digital Marketing</a>
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </li>
                        <li
                          className={activeService === "ui/ux" ? "active" : ""}
                          onClick={() => setActiveService("ui/ux")}
                        >
                          <a>UI/UX Design</a>
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </li>
                        <li
                          className={
                            activeService === "maintenance" ? "active" : ""
                          }
                          onClick={() => setActiveService("maintenance")}
                        >
                          <a>Maintenance & Support</a>
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    <div className="pp-service-widget-categories">
                      <ul>
                        {[
                          "App Development",
                          "Web Development",
                          "API & Backend Solution",
                          "SEO & Digital Marketing",
                          "UI/UX Design",
                          "Maintenance & Support",
                        ].map((service) => (
                          <li
                            key={service}
                            className={
                              activeService === service ? "active" : ""
                            }
                            onClick={() => setActiveService(service)}
                          >
                            <a>{service}</a>
                            <span>
                              <i className="fa-regular fa-arrow-right-long"></i>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                {activeService === "App Development" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>App Development </h3>
                      <p className="mb-4">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <p className="mb-4">
                        pellentesque vulputate malesuada dictumst fames interdum
                        cursus an te tellus porta ullamcorper accumsan non eu
                        adipiscing integer venenatis sagittis arcu curae finibus
                        ridi culus aliquam velit lobortis senectus vitae
                        sollicitudin sit consectetuer ultricies rutrum
                        parturient pede nisi nascetur habitant netus quisque
                        elementum inceptos nam felis penatibus feugiat
                      </p>
                      <h3>What We Provide</h3>
                      <p className="mb-5">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>The Challange</h3>
                      <p>
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Various
                            analysis options.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Page Load
                            (time, size, number of requests).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pp-faq-wrapper mt-5">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <div className="accordion" id="accordion">
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".3s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  aria-expanded="true"
                                  aria-controls="faq1"
                                >
                                  Why Is SEO Important For Small Business?
                                </button>
                              </h5>
                              <div
                                id="faq1"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  aria-expanded="false"
                                  aria-controls="faq2"
                                >
                                  How do I choose the best SEO Agency?
                                </button>
                              </h5>
                              <div
                                id="faq2"
                                className="accordion-collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  aria-expanded="false"
                                  aria-controls="faq3"
                                >
                                  Better Security And Faster Server?
                                </button>
                              </h5>
                              <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-0 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq4"
                                  aria-expanded="false"
                                  aria-controls="faq4"
                                >
                                  Deployment Within Few Minutes
                                </button>
                              </h5>
                              <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "Web Development" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>Web Development</h3>
                      <p className="mb-4">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <p className="mb-4">
                        pellentesque vulputate malesuada dictumst fames interdum
                        cursus an te tellus porta ullamcorper accumsan non eu
                        adipiscing integer venenatis sagittis arcu curae finibus
                        ridi culus aliquam velit lobortis senectus vitae
                        sollicitudin sit consectetuer ultricies rutrum
                        parturient pede nisi nascetur habitant netus quisque
                        elementum inceptos nam felis penatibus feugiat
                      </p>
                      <h3>What We Provide</h3>
                      <p className="mb-5">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>The Challange</h3>
                      <p>
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Various
                            analysis options.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Page Load
                            (time, size, number of requests).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pp-faq-wrapper mt-5">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <div className="accordion" id="accordion">
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".3s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  aria-expanded="true"
                                  aria-controls="faq1"
                                >
                                  Why Is SEO Important For Small Business?
                                </button>
                              </h5>
                              <div
                                id="faq1"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  aria-expanded="false"
                                  aria-controls="faq2"
                                >
                                  How do I choose the best SEO Agency?
                                </button>
                              </h5>
                              <div
                                id="faq2"
                                className="accordion-collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  aria-expanded="false"
                                  aria-controls="faq3"
                                >
                                  Better Security And Faster Server?
                                </button>
                              </h5>
                              <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-0 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq4"
                                  aria-expanded="false"
                                  aria-controls="faq4"
                                >
                                  Deployment Within Few Minutes
                                </button>
                              </h5>
                              <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "API & Backend Solution" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>API & Backend Solution</h3>
                      <p className="mb-4">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <p className="mb-4">
                        pellentesque vulputate malesuada dictumst fames interdum
                        cursus an te tellus porta ullamcorper accumsan non eu
                        adipiscing integer venenatis sagittis arcu curae finibus
                        ridi culus aliquam velit lobortis senectus vitae
                        sollicitudin sit consectetuer ultricies rutrum
                        parturient pede nisi nascetur habitant netus quisque
                        elementum inceptos nam felis penatibus feugiat
                      </p>
                      <h3>What We Provide</h3>
                      <p className="mb-5">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>The Challange</h3>
                      <p>
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Various
                            analysis options.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Page Load
                            (time, size, number of requests).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pp-faq-wrapper mt-5">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <div className="accordion" id="accordion">
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".3s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  aria-expanded="true"
                                  aria-controls="faq1"
                                >
                                  Why Is SEO Important For Small Business?
                                </button>
                              </h5>
                              <div
                                id="faq1"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  aria-expanded="false"
                                  aria-controls="faq2"
                                >
                                  How do I choose the best SEO Agency?
                                </button>
                              </h5>
                              <div
                                id="faq2"
                                className="accordion-collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  aria-expanded="false"
                                  aria-controls="faq3"
                                >
                                  Better Security And Faster Server?
                                </button>
                              </h5>
                              <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-0 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq4"
                                  aria-expanded="false"
                                  aria-controls="faq4"
                                >
                                  Deployment Within Few Minutes
                                </button>
                              </h5>
                              <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "SEO & Digital Marketing" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>SEO & Digital Marketing</h3>
                      <p className="mb-4">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <p className="mb-4">
                        pellentesque vulputate malesuada dictumst fames interdum
                        cursus an te tellus porta ullamcorper accumsan non eu
                        adipiscing integer venenatis sagittis arcu curae finibus
                        ridi culus aliquam velit lobortis senectus vitae
                        sollicitudin sit consectetuer ultricies rutrum
                        parturient pede nisi nascetur habitant netus quisque
                        elementum inceptos nam felis penatibus feugiat
                      </p>
                      <h3>What We Provide</h3>
                      <p className="mb-5">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>The Challange</h3>
                      <p>
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Various
                            analysis options.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Page Load
                            (time, size, number of requests).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pp-faq-wrapper mt-5">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <div className="accordion" id="accordion">
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".3s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  aria-expanded="true"
                                  aria-controls="faq1"
                                >
                                  Why Is SEO Important For Small Business?
                                </button>
                              </h5>
                              <div
                                id="faq1"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  aria-expanded="false"
                                  aria-controls="faq2"
                                >
                                  How do I choose the best SEO Agency?
                                </button>
                              </h5>
                              <div
                                id="faq2"
                                className="accordion-collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  aria-expanded="false"
                                  aria-controls="faq3"
                                >
                                  Better Security And Faster Server?
                                </button>
                              </h5>
                              <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-0 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq4"
                                  aria-expanded="false"
                                  aria-controls="faq4"
                                >
                                  Deployment Within Few Minutes
                                </button>
                              </h5>
                              <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "UI/UX Design" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>UI/UX Design</h3>
                      <p className="mb-4">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <p className="mb-4">
                        pellentesque vulputate malesuada dictumst fames interdum
                        cursus an te tellus porta ullamcorper accumsan non eu
                        adipiscing integer venenatis sagittis arcu curae finibus
                        ridi culus aliquam velit lobortis senectus vitae
                        sollicitudin sit consectetuer ultricies rutrum
                        parturient pede nisi nascetur habitant netus quisque
                        elementum inceptos nam felis penatibus feugiat
                      </p>
                      <h3>What We Provide</h3>
                      <p className="mb-5">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>The Challange</h3>
                      <p>
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Various
                            analysis options.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Page Load
                            (time, size, number of requests).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pp-faq-wrapper mt-5">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <div className="accordion" id="accordion">
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".3s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  aria-expanded="true"
                                  aria-controls="faq1"
                                >
                                  Why Is SEO Important For Small Business?
                                </button>
                              </h5>
                              <div
                                id="faq1"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  aria-expanded="false"
                                  aria-controls="faq2"
                                >
                                  How do I choose the best SEO Agency?
                                </button>
                              </h5>
                              <div
                                id="faq2"
                                className="accordion-collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  aria-expanded="false"
                                  aria-controls="faq3"
                                >
                                  Better Security And Faster Server?
                                </button>
                              </h5>
                              <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-0 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq4"
                                  aria-expanded="false"
                                  aria-controls="faq4"
                                >
                                  Deployment Within Few Minutes
                                </button>
                              </h5>
                              <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "Maintenance & Support" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>Maintenance & Support</h3>
                      <p className="mb-4">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <p className="mb-4">
                        pellentesque vulputate malesuada dictumst fames interdum
                        cursus an te tellus porta ullamcorper accumsan non eu
                        adipiscing integer venenatis sagittis arcu curae finibus
                        ridi culus aliquam velit lobortis senectus vitae
                        sollicitudin sit consectetuer ultricies rutrum
                        parturient pede nisi nascetur habitant netus quisque
                        elementum inceptos nam felis penatibus feugiat
                      </p>
                      <h3>What We Provide</h3>
                      <p className="mb-5">
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>The Challange</h3>
                      <p>
                        At tempus aenean sapien torquent sed diam class
                        efficitur mus morbi eros dictum quam augue ac laor eet
                        ligula libero mi commodo nibh hac fermentum orci ad
                        pharetra consequat justo duis turpis lorem elit dui
                        consectetur magnis lacinia odio per placerat vestibulum
                        volutpat mauris mollis primis imperdiet posu ere ex enim
                        gravida cras congue
                      </p>
                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Various
                            analysis options.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Page Load
                            (time, size, number of requests).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance Data
                            analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pp-faq-wrapper mt-5">
                      <div className="faq-accordion-items">
                        <div className="faq-accordion">
                          <div className="accordion" id="accordion">
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".3s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  aria-expanded="true"
                                  aria-controls="faq1"
                                >
                                  Why Is SEO Important For Small Business?
                                </button>
                              </h5>
                              <div
                                id="faq1"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  aria-expanded="false"
                                  aria-controls="faq2"
                                >
                                  How do I choose the best SEO Agency?
                                </button>
                              </h5>
                              <div
                                id="faq2"
                                className="accordion-collapse show"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-3 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  aria-expanded="false"
                                  aria-controls="faq3"
                                >
                                  Better Security And Faster Server?
                                </button>
                              </h5>
                              <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item mb-0 wow fadeInUp"
                              data-wow-delay=".7s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq4"
                                  aria-expanded="false"
                                  aria-controls="faq4"
                                >
                                  Deployment Within Few Minutes
                                </button>
                              </h5>
                              <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion"
                              >
                                <div className="accordion-body">
                                  Nullam faucibus eleifend mi eu varius. Integer
                                  vel tincidunt massa, quis semper odio.Mauris
                                  et mollis quam. Nullam fringilla erat id ante
                                  commodo maximus
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommonFooter />
    </>
  );
};

export default ServiceDetail;
