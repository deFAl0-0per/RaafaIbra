import './index.css'
import Navbar from './component/navbar'
import Home from './component/home'
import Skills from './component/skills'
import Porto from './component/porto'
import Doc from './component/doc'
import Footer from './component/footer'
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.85,
      interval: 200,  // Interval antar elemen yang di-animasi
    });
  });
  return (
    <>
      <Navbar/>
      <Home/>
      <Skills/>
      <Porto/>
      <Doc/>
      <Footer/>
    </>
  )
}

