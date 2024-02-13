import { Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
// import { ThemeProvider } from "./context/ThemeContext.tsx";
// import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext.tsx";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./styles/globalStyle";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WhatWeDo from "./pages/What-we-do";
import Services from "./pages/Services/index.tsx";
import OurProjects from "./pages/OurProjects";
import Pricing from "./pages/Pricing";
import HireUs from "./pages/HireUs";
import Blog from "./pages/Blog.tsx";
import Testimonials from "./pages/Testimonials/index.tsx";
// import ProgressBar from "./components/ProgressBar.tsx";
// import { useState } from "react";
// import LoadingBar from "react-top-loading-bar";
// import { useTheme } from "./context/ThemeContext.tsx";
function App() {
  const { theme } = useTheme();
  // const [progress, setProgress] = useState(0);
  return (
    <>
      <GlobalStyle theme={theme} />
      {/* <ProgressBar /> */}
      {/* <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-projects" element={<OurProjects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hire-us" element={<HireUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
