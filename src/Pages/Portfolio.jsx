import AboveHeader from "../Component/Home/AboveHeader.jsx";
import Header from "../Component/Home/Header.jsx";
import CommonFooter from "../Component/PagesFooter/CommonFooter.jsx";
import { Link } from "react-router-dom";

const Portfolio = () => {
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
                Portfolio
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="pp-pp-news-section-2 section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <Link to="/project-details">
                <div className="pp-news-card-item-2 mt-0">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-1.jpg" alt="img" />
                    <span>Smart, Business</span>
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
              <Link to="/project-details">
                <div className="pp-news-card-item-2 mt-0">
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
              <Link to="/project-details">
                <div className="pp-news-card-item-2 mt-0">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-3.jpg" alt="img" />
                    <span>AIBenefits</span>
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
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <Link to="/project-details">
                <div className="pp-news-card-item-2 mt-0">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-4.jpg" alt="img" />
                    <span>AI, Business</span>
                  </div>
                  <div className="pp-news-content">
                    <h3>Regional Managers time management.</h3>
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
              <Link to="/project-details">
                <div className="pp-news-card-item-2 mt-0">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-5.jpg" alt="img" />
                    <span>Business</span>
                  </div>
                  <div className="pp-news-content">
                    <h3>Revitalising your people in a retail downturn</h3>
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
              <Link to="/project-details">
                <div className="pp-news-card-item-2 mt-0">
                  <div className="pp-news-image">
                    <img src="assets/img/home-2/news/news-6.jpg" alt="img" />
                    <span>AIBenefits</span>
                  </div>
                  <div className="pp-news-content">
                    <h3>Organisationaly teams are just like families.</h3>
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
          <div className="page-nav-wrap text-center">
            <ul>
              <li className="active">
                <a className="page-numbers" href="#">
                  1
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  2
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  3
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CommonFooter />
    </>
  );
};

export default Portfolio;
