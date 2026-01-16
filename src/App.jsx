import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navabr"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import WhatsAppCTA from "./components/CTA"
import Team from "./components/Team"
import FAQs from "./components/FAQ"
import Gallery from "./components/Gallery"


function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <WhatsAppCTA />
      <Team />
      <FAQs />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
