import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import About from './components/About'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
