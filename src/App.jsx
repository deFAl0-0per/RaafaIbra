import './index.css'
import Navbar from './component/navbar'
import Home from './component/home'
import Skills from './component/skills'
import Porto from './component/porto'
import Doc from './component/doc'
import Footer from './component/footer'
import ScrollReveal from 'scrollreveal'
import { useEffect } from "react";


export default function App() {
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

