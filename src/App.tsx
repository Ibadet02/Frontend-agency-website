import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./styles/globalStyle";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WhatWeDo from "./pages/What-we-do";
import OurServices from "./pages/OurServices";
import OurProjects from "./pages/OurProjects";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <ThemeProvider theme={{ data: "" }}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-projects" element={<OurProjects />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
