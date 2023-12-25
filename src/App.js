import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
// import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { useState } from "react";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";


function App() {
  const[darkMode, setdarkMode]= useState(true);

  function darkModeHandler(){
    setdarkMode(!darkMode);
  }


  return (
     <div className={darkMode && "dark"} >
      <main className="bg-slate-50 dark:bg-gray-900 text-black dark:text-white overflow-x-hidden"> 
        <Navbar darkMode={darkMode} setdarkMode={setdarkMode}/>
        <Home/>
        <SocialLinks/>
        <About/>
        {/* <Portfolio/> */}
        <Qualification/>
        <Skills/>
        <Projects/>
        <Contact/>
       </main> 
       <Footer/>
    </div>
   
  );
}

export default App;
