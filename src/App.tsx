import "./App.css";
import Blogs from "./components/sections/blogs-section";
import Experience from "./components/sections/experience-section";
import Expertise from "./components/sections/expertise-section";
import FAQ from "./components/sections/faq-section";
import Hero from "./components/sections/hero-section";
import Testimonials from "./components/sections/testimonials-section";
import Works from "./components/sections/works-section";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <Hero />
      <Expertise />
      <Works />
      <Experience />
      <Blogs />
      <Testimonials />
      <FAQ />
    </Layout>
  );
}

export default App;
