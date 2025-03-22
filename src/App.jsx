import './App.css'
import Header from './Components/Header.jsx';
import HeroSection from './Components/HeroSection.jsx'; 
import Features from './Components/Features.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Services from './Components/Services.jsx';
import Gallery from './Components/Gallery.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Team from './Components/Team.jsx';
import Contact from './Components/Contact.jsx';
function App() {

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Features></Features>
      <AboutUs></AboutUs>
      <Services></Services>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Team></Team>
      <Contact></Contact>
    </>
  )
}

export default App
