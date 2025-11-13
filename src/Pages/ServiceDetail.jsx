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
                        At Cloudemy, we craft high-quality, performance-driven
                        mobile applications that bring your ideas to life. Our
                        team of expert developers, designers, and strategists
                        work together to deliver apps that are fast, secure, and
                        visually stunning — helping you connect better with your
                        customers and grow your business.
                      </p>

                      <h3>Our Expertise</h3>
                      <p className="mb-5">
                        We specialize in building custom mobile solutions
                        tailored to your unique business needs — whether you’re
                        a startup looking to launch your first app or an
                        enterprise aiming to optimize digital operations.
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>What We Offer</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Custom
                            App Development – End-to-end mobile app solutions
                            built around your goal.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Cross-Platform Development (Flutter/React) – One
                            powerful codebase for both Android & iOS.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> UI/UX
                            Design – Modern, intuitive, and engaging user
                            interfaces.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Backend
                            & API Integration – Secure, scalable, and
                            high-performance architecture.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Maintenance & Support – Continuous improvements,
                            updates, and technical assistance.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            App Store Deployment – Hassle-free publishing and
                            optimization for App Store & Play Store.
                          </li>
                        </ul>
                      </div>

                      <h3 className="whyChooseUs">Why Choose Us</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Scalable, secure, and future-ready apps.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            On-time delivery with transparent communication.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Focus
                            on performance, design, and user satisfaction.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Complete development lifecycle — from idea to
                            launch.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "Web Development" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>Web Development</h3>
                      <p className="mb-4">
                        At Cloudemy, we build fast, secure, and visually
                        stunning websites that help businesses grow in the
                        digital world. Our web development solutions are
                        designed to create impactful online experiences that
                        convert visitors into loyal customers. Whether you need
                        a simple business website, a custom web portal, or a
                        complete eCommerce platform — we deliver excellence at
                        every step.
                      </p>

                      <h3>Our Approach</h3>
                      <p className="mb-5">
                        We believe that a great website is more than just good
                        design — it’s a powerful business tool.Our development
                        process begins with understanding your brand, audience,
                        and goals.Based on that, we plan and design a website
                        that is not only visually appealing but also technically
                        strong and performance-optimized. Every line of code we
                        write follows modern web standards and best practices to
                        ensure your site loads fast, stays secure, and performs
                        seamlessly across all devices.
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>What We Offer</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Custom
                            Website Development – Fully tailored websites built
                            around your unique business goals.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            E-Commerce Development – Scalable online stores with
                            secure payment gateways and easy management.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Corporate & Portfolio Websites – Professional web
                            presence that reflects your brand identity.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> CMS
                            Development (WordPress / Headless CMS) – Easily
                            manage and update content with a powerful backend.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Web
                            Application Development – High-performance,
                            interactive web apps using modern frameworks.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> API
                            Integration & Automation – Streamlined workflows
                            through third-party API integration.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            SEO-Friendly Development – Optimized architecture
                            and structure for better search visibility.
                          </li>
                        </ul>
                      </div>
                      <h3 className="whyChooseUs">Why Choose Us</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Custom-Tailored Solutions : Every website is
                            uniquely crafted to match your business needs.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            User-Centric Design: Clean, engaging, and
                            conversion-driven UI/UX.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            End-to-End Service: From concept and design to
                            hosting, deployment, and maintenance.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Transparent Communication: Regular updates, progress
                            tracking, and on-time delivery.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "API & Backend Solution" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>API & Backend Solution</h3>
                      <p className="mb-4">
                        Behind every powerful app or website lies a strong and
                        reliable backend system. At Cloudemy, we specialize in
                        developing secure, scalable, and high-performance
                        backend architectures that power modern digital
                        products. Our API and backend development services
                        ensure your mobile or web application runs smoothly,
                        handles complex data, and scales effortlessly as your
                        business grows.
                      </p>

                      <h3>What We Offer</h3>
                      <p className="mb-5">
                        We design and develop robust RESTful and GraphQL. APIs
                        that connect your frontend to backend
                        seamlessly.Scalable and modular architecture built for
                        performance and growth.Structured, high-performing
                        databases using MySQL, PostgreSQL, MongoDB, or
                        Firebase.Seamless integration with payment gateways,
                        CRMs social platforms, and other third-party tools.
                        Scalable hosting using AWS, Google Cloud, or Azure for
                        smooth operations. Implementation of secure
                        authentication systems (OAuth, JWT) and encryption
                        protocols.
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>Why Choose Us</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Scalable
                            and Reliable Systems: Designed to handle large user
                            bases and complex data flows.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Clean
                            Architecture: Maintainable, testable, and modular
                            code structure.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Strong
                            Security: Data protection and access control
                            implemented at every level.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Advance
                            Data analysis operation.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "SEO & Digital Marketing" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>SEO & Digital Marketing</h3>
                      <p className="mb-4">
                        In today’s competitive digital landscape, visibility is
                        everything. At Cloudemy, we help brands grow, engage,
                        and convert through data-driven SEO and Digital
                        Marketing strategies. Our goal is simple — to position
                        your business in front of the right audience, at the
                        right time, with the right message. We combine
                        creativity, technology, and analytics to deliver
                        measurable results that drive growth and long-term
                        success.
                      </p>

                      <h3>Our Approach</h3>
                      <p className="mb-5">
                        Our strategy begins with understanding your brand,
                        audience, and goals.We perform in-depth keyword
                        research, competitor analysis, and market insights to
                        craft personalized marketing campaigns that deliver real
                        ROI. Whether you want to improve your search rankings,
                        boost organic traffic, or build a strong online brand
                        identity — we have the expertise to make it happen.
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>What We Offer</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Search
                            Engine Optimization (SEO) – Comprehensive on-page,
                            off-page, and technical SEO to improve visibility
                            and ranking.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Social
                            Media Marketing (SMM) – Build your presence across
                            platforms like Instagram, Facebook, LinkedIn, and X
                            (Twitter).
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Pay-Per-Click (PPC) Advertising – Targeted Google
                            Ads and social media campaigns that convert leads
                            into sales.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Content
                            Marketing – Engaging blogs, articles, and creative
                            visuals that attract and retain customers.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Email
                            Marketing – Personalized campaigns that nurture
                            customer relationships and drive repeat business.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Brand
                            Strategy & Reputation Management – Strengthen your
                            digital presence and establish trust with your
                            audience.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Analytics & Performance Tracking – Transparent
                            reporting and data-driven insights to measure
                            success and optimize campaigns.
                          </li>
                        </ul>
                      </div>
                      <h3 className="whyChooseUs">Why Choose Us</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Data-Driven Strategy : Every decision backed by real
                            insights and analytics.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Creative + Technical Expertise : A perfect balance
                            of strategy, content, and technology.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Transparent Reporting : Clear performance reports
                            and measurable KPIs.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Full-Funnel Approach: From awareness to conversion —
                            we handle every stage of the customerjourney.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Proven Results: Boost in traffic, engagement, and
                            ROI with sustainable long-term growth.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "UI/UX Design" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>UI/UX Design</h3>
                      <p className="mb-4">
                        At Cloudemy, we believe that great design is not just
                        about looks — it’s about creating experiences that
                        connect, engage, and inspire users. Our UI/UX design
                        services focus on understanding user behavior, blending
                        creativity with strategy, and delivering interfaces that
                        are intuitive, attractive, and conversion-driven.
                        Whether you’re building a new product or redesigning an
                        existing one, our design process ensures every click,
                        scroll, and interaction feels seamless and meaningful.
                      </p>

                      <h3>Our Approach</h3>
                      <p className="mb-5">
                        We follow a user-centric design philosophy — combining
                        research, usability, and visual storytelling. Our team
                        begins by understanding your users, business goals, and
                        brand identity. Using wireframes, prototypes, and design
                        sprints, we craft designs that are not only visually
                        appealing but also easy to use and optimized for
                        performance. Every element — color, typography, layout,
                        and motion — is designed with purpose,ensuring the final
                        product delivers both beauty and functionality.
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3>What We Offer</h3>
                      <p></p>
                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>User
                            Research & Analysis – Understanding user needs,
                            behaviors, and pain points.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Wireframing & Prototyping – Building the structure
                            and flow before design implementation.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>UI
                            Design (User Interface) – Modern, clean, and
                            visually compelling interfaces that reflect your
                            brand.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>UX
                            Design (User Experience) – Seamless navigation and
                            intuitive user journeys for better engagement.
                          </li>

                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Usability Testing – Real-world testing to ensure
                            your design performs flawlessly across devices.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Product
                            Redesign – Refresh outdated interfaces with a
                            modern, user-friendly look.
                          </li>
                        </ul>
                      </div>
                      <h3 className="whyChooseUs">Why Choose Us</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            User-Centric Approach : Every decision is made with
                            the end-user in mind.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Creative Excellence : Designs that are both
                            functional and visually stunning.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Collaborative Process : Regular feedback loops and
                            transparent communication.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Cross-Platform Consistency: Seamless design
                            experience across mobile, web, and desktop.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Conversion-Focused : A perfect balance of aesthetics
                            and business goals.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {activeService === "Maintenance & Support" && (
                  <>
                    <div className="pp-service-details-content">
                      <h3>Maintenance & Support</h3>
                      <p className="mb-4">
                        Launching your app or website is just the beginning —
                        keeping it fast, secure, and up-to-date is what ensures
                        long-term success. At Cloudemy, we provide reliable
                        maintenance and technical support services to keep your
                        digital products performing at their best. From security
                        monitoring and bug fixes to performance optimization and
                        feature updates, our team ensures your systems remain
                        stable, responsive, and future-ready.
                      </p>

                      <h3>Our Approach</h3>
                      <p className="mb-5">
                        We believe maintenance is not just about fixing issues —
                        it’s about ensuring continuous improvement. Our
                        proactive team monitors performance, identifies
                        potential risks, and implements updates before problems
                        arise. With regular maintenance schedules, security
                        checks, and version upgrades, we help your business
                        avoid downtime and maintain an uninterrupted digital
                        experience for your users.
                      </p>
                      <div className="pp-thumb">
                        <img
                          src="assets/img/inner-page/service-details/details-2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3> What We Offer</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Website & App Maintenance – Regular updates,
                            patches, and improvements to ensure peak
                            performance.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i> Bug
                            Fixes & Error Handling – Quick resolution of
                            technical issues and code-level fixes.
                          </li>

                          <li>
                            <i className="fa-solid fa-circle-check"></i>Security
                            Monitoring – Continuous protection against
                            vulnerabilities, malware, and threats.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Performance Optimization – Enhancing load speed,
                            database efficiency, and server response.
                          </li>
                          <li> 
                            <i className="fa-solid fa-circle-check"></i>Version
                            & Framework Upgrades – Keeping your platform updated
                            with the latest technology standards.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Backup &
                            Recovery Solutions – Secure data management with
                            scheduled backups and disaster recovery.
                          </li>   
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Technical Support (24/7) – Dedicated support team
                            available to assist you whenever you need help.
                          </li>
                        </ul>
                      </div>
                      <h3 className="whyChooseUs">Why Choose Us</h3>

                      <div className="pp-details-list-items">
                        <ul className="pp-details-list">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Proactive Maintenance : We prevent issues before
                            they affect performance.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            24/7 Support Availability : Always ready to respond,
                            no matter the time zone.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Expert Team : Skilled engineers with deep knowledge
                            of app and web ecosystems.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Cost-Effective Plans : Flexible maintenance packages
                            tailored to your business needs.
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Security First Approach : Continuous monitoring and
                            updates for maximum protection.
                          </li>
                        </ul>
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
