import './App.css';
import NavBar from './components/navbar/NavBar';
import LandingPage from './components/landingpage/LandingPage';
import Projects from './components/projects/Projects';
import Experieneces from './components/experiences/Experiences';
import Contact from './components/contact/Contact';

function App() {
  return (

    <div className="app">

      <NavBar />  

      <div className="sections">
        
        <LandingPage />  
        <Projects />  
        <Experieneces />  
        <Contact />  

      </div>

    </div>

  );
}

export default App;
