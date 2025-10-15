import AboveHeader from "../Component/Home/AboveHeader.jsx";
import Header from "../Component/Home/Header.jsx";
import CommonFooter from "../Component/PagesFooter/CommonFooter.jsx";

const BlogDetail = () => {
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
                Blog Details
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="pp-news-details-section section-padding">
        <div className="container">
          <div className="pp-news-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-12">
                <div className="pp-details-image">
                  <img
                    src="assets/img/inner-page/news-details/details-1.jpg"
                    alt="img"
                  />
                </div>
                <div className="pp-news-details-content">
                  <h3>How to keep your Body Health in Over Festival</h3>
                  <p>
                    The is ipsum dolor sit amet consectetur adipiscing elit.
                    Fusce eleifend porta arcu In hac habitasse the is platea
                    augue thelorem turpoi dictumst. In lacus libero faucibus at
                    malesuada sagittis placerat eros sed istincidunt augue ac
                    ante rutrum sed the is sodales augue consequat.
                  </p>
                  <div className="pp-sideber">
                    <h6>
                      Pellentesque sollicitudin congue dolor non aliquam. Morbi
                      volutpat, nisi vel ultricies urnacondimentum, sapien neque
                      lobortis tortor, quis efficitur mi ipsum eu metus.
                      Praesent eleifend orci sit amet est vehicula.
                    </h6>
                    <div className="client-info-item">
                      <div className="client-info">
                        <div className="image">
                          <img
                            src="assets/img/inner-page/news-details/client.jpg"
                            alt="img"
                          />
                        </div>
                        <h4>Sohel Tanvir</h4>
                      </div>
                      <div className="icon">
                        <img
                          src="assets/img/inner-page/icon/05.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="pp-details-image">
                        <img
                          src="assets/img/inner-page/news-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pp-details-image">
                        <img
                          src="assets/img/inner-page/news-details/details-3.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea dolor commodo
                    consequat. Duis aute irure and dolor in reprehenderit.
                  </p>
                  <div className="row pp-tag-share-wrap mt-4 mb-5">
                    <div className="col-lg-8 col-12">
                      <div className="tagcloud">
                        <span>Tags:</span>
                        <a href="#">Security</a>
                        <a href="#">UI/UX Desing</a>
                        <a href="#">Digital</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <div className="social-share">
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pp-comments-area">
                    <div className="pp-comments-heading">
                      <h3>02 Comments</h3>
                    </div>
                    <div className="pp-blog-single-comment d-flex gap-4 pt-4 pb-4">
                      <div className="image">
                        <img
                          src="assets/img/inner-page/news-details/comment-1.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="pp-content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="con">
                            <h5>
                              <a href="#">Leslie Alexander</a>
                            </h5>
                            <span>February 10, 2024 at 2:37 pm</span>
                          </div>
                          <a href="#" className="reply">
                            Reply
                          </a>
                        </div>
                        <p className="mt-3 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                      </div>
                    </div>
                    <div className="pp-blog-single-comment d-flex gap-4 pt-4 pb-4">
                      <div className="image">
                        <img
                          src="assets/img/inner-page/news-details/comment-2.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="pp-content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="con">
                            <h5>
                              <a href="#">Ralph Edwards</a>
                            </h5>
                            <span>February 10, 2024 at 2:37 pm</span>
                          </div>
                          <a href="#" className="reply">
                            Reply
                          </a>
                        </div>
                        <p className="mt-3 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                      </div>
                    </div>
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

export default BlogDetail;
