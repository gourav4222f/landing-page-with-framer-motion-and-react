
import Lenis from 'lenis';
import Herosection from './components/Home-Page/Herosection'
import Services from './components/Home-Page/Services'
import AboutSection from './components/Home-Page/AboutSection';
import ThreeFiberAnimation from './components/Home-Page/ThreeFiberAnimation';
import Projects from './components/Home-Page/Projects';
import ReviewSection from './components/Home-Page/ReviewSection';
import ContectUs from './components/Home-Page/ContactUs';

function App() {

  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  return (

    <div className=' overflow-x-hidden '>
      <div className=' w-full h-full'>
        <Herosection />
      </div>
      <div className=' w-full h-full'>
        <AboutSection />
      </div>
      <div className=' w-full h-full'>
        <Projects />
      </div>
      <div className=' w-full h-full'>
        <Services />
      </div>
      <div className=' w-full h-full overflow-hidden'>
        <ReviewSection />
      </div>
      <div className=' w-full h-full overflow-hidden'>
        <ContectUs />
      </div>



    </div>

  )
}

export default App
