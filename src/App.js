import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Services from "./Pages/Services.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Blog from "./Pages/Blog.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import ServiceDetail from "./Pages/ServiceDetail.jsx";
import BlogDetail from "./Pages/BlogDetail.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import ProjectDetails from "./Pages/ProjectDetails.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service-details" element={<ServiceDetail />} />
        <Route path="/service-details/:service" element={<ServiceDetail />} />
        <Route path="/blog-details" element={<BlogDetail />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
