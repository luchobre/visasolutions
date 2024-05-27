import NavbarComponent from './components/Navbar/NavbarComponent'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUs/AboutUs'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Benefits from './components/Benefits/Benefits'
import Requirements from './components/Requirements/Requirements'
import Process from './components/Process/Process'
import Contact from './components/Contact/Contact'


export default function Home() {
  return (
    <>
    <main>
      <NavbarComponent />
      <Banner />
      <AboutUs />
      <HowItWorks />
      <Benefits />
      <Requirements />
      <Process />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
