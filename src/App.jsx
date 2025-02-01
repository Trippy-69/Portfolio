import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className="bg-black h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Experience/> 
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
