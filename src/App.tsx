import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.tsx";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./styles/globalStyle";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services/index.tsx";
import OurProjects from "./pages/OurProjects";
import Pricing from "./pages/Pricing";
import HireUs from "./pages/HireUs";
import Blog from "./pages/Blog.tsx";
import Testimonials from "./pages/Testimonials/index.tsx";
import About from "./pages/About/index.tsx";
import SmoothScroll from "./components/SmoothScroll.tsx";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <SmoothScroll>
      <GlobalStyle theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<OurProjects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hire-us" element={<HireUs />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
