import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Ourevisin from './Components/OurVision/Ourvisin';
// import Sponsers from './Components/Sponsers/sponsers';
// import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> */}
      {/* <Ourevisin/> */}
      {/* <Team/> */}
      {/* <Sponsers/> */}
      <Footer/>
    </div>
  );
}

export default App;
