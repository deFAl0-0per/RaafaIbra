import '../index.css'
import potoDoc1 from '../component/img/docum mc bulbas.jpg';
import potoDoc2 from '../component/img/docum mc bulbas2.jpg';
import potoDoc3 from '../component/img/docum mc hargur.jpg';
import potoDoc4 from '../component/img/docum pelatihan rpl p4.jpg'
import potoDoc5 from '../component/img/docum seminar io fest.jpg'
import potoDoc6 from '../component/img/docum usk bnsp.jpg'
import potoDoc7 from '../component/img/docum pengarahan lks.jpg'
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

export default function Doc (){
  useEffect(() => {
    const sr = ScrollReveal({
         distance: '50px',
         duration: 800,
         easing: 'ease-in-out',
         opacity: 0,
         scale: 0.85,
         interval: 200, // Interval antar elemen yang di-animasi
     })
     sr.reveal('.reveal')

     return () => {sr.destroy()};
     }, []);
    return (
        <>  
        <div id='doc' className='bg-gradient-to-b from-[#1E3A8A] via-[#1E3A8A] to-black w-full h-[200px]' ></div>
            <div className="w-full h-[4100px] xl:h-[4200px] flex flex-col items-center overflow-hidden bg-black pt-[100px] z-[999]" >
                <div className='w-full mb-[50px] m-auto flex flex-col justify-center items-center ' >
                    <h1 className='text-5xl xl:text-8xl text-white font-black mb-[10px] ' >My Documents</h1>
                    <span className='font-black text-2xl xl:text-3xl text-white ' >Let's see my documents !!</span>
                </div>
                <div className="m-auto ml-[0px] xl:ml-[550px] w-full block overflow-hidden xl:overflow-visible justify-center items-center">
  {/* Gambar pertama (dengan latar belakang) */}
  <div className="reveal flex w-full h-[300px] rounded-2xl m-auto mt-[0px] mb-[20px] xl:justify-between justify-start xl:items-center items-center shadow-2xl">
    <div
      className="xl:animate-[docMoveLeft_15s_linear_infinite] animate-[docMoveLeftSmall_10s_linear_infinite] w-[400px] xl:w-[400px] h-[700px] xl:h-[700px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl m-auto bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${potoDoc1})`, willChange: "transform" }}
    ></div>
  </div>

  {/* Gambar kedua */}
  <div className="reveal flex w-full h-[300px] rounded-2xl m-auto mt-[450px] mb-[20px] xl:justify-between justify-start xl:items-center items-center shadow-2xl">
    <div
      className="xl:animate-[docMoveRight_15s_linear_infinite] animate-[docMoveRightSmall_10s_linear_infinite] w-[400px] xl:w-[400px] h-[700px] xl:h-[700px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl m-auto bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${potoDoc2})`, willChange: "transform" }}
    ></div>
  </div>

  {/* Gambar ketiga */}
  <div className="reveal flex w-full h-[300px] rounded-2xl m-auto mt-[450px] mb-[20px] xl:justify-between justify-start xl:items-center items-center shadow-2xl">
    <div
      className="xl:animate-[docMoveLeft_15s_linear_infinite] animate-[docMoveLeftSmall_10s_linear_infinite] w-[410px] xl:w-[400px] h-[700px] xl:h-[700px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl m-auto bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${potoDoc3})`, willChange: "transform" }}
    ></div>
  </div>

  {/* Gambar keempat */}
  <div className="reveal flex w-full h-[300px] rounded-2xl m-auto mt-[450px] mb-[20px] xl:justify-between justify-start xl:items-center items-center shadow-2xl">
    <div
      className="xl:animate-[docMoveRight_15s_linear_infinite] animate-[docMoveRightSmall_10s_linear_infinite] w-[410px] xl:w-[400px] h-[250px] xl:h-[280px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl m-auto bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${potoDoc4})`, willChange: "transform" }}
    ></div>
  </div>

  {/* Gambar kelima */}
  <div className="reveal flex w-full h-[300px] rounded-2xl m-auto mt-[100px] mb-[20px] xl:justify-between justify-start xl:items-center items-center shadow-2xl">
    <div
      className="xl:animate-[docMoveLeft_15s_linear_infinite] animate-[docMoveLeftSmall_10s_linear_infinite] w-[400px] xl:w-[400px] h-[250px] xl:h-[280px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl m-auto bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${potoDoc5})`, willChange: "transform" }}
    ></div>
  </div>

  {/* Gambar keenam */}
  <div className="reveal flex w-full h-[300px] rounded-2xl m-auto mt-[100px] mb-[20px] xl:justify-between justify-start xl:items-center items-center shadow-2xl">
    <div
      className="xl:animate-[docMoveRight_15s_linear_infinite] animate-[docMoveRightSmall_10s_linear_infinite] w-[400px] xl:w-[400px] h-[250px] xl:h-[280px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl m-auto bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${potoDoc6})`, willChange: "transform" }}
    ></div>
  </div>

  {/* Gambar ketujuh */}
  <div className="reveal flex w-full h-[350px] rounded-2xl m-auto mt-[100px] mb-[20px] xl:justify-between justify-start xl:items-center items-center shadow-2xl">
    <div
      className="xl:animate-[docMoveLeft_15s_linear_infinite] animate-[docMoveLeftSmall_10s_linear_infinite] w-[400px] xl:w-[400px] h-[250px] xl:h-[280px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl m-auto bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${potoDoc7})`, willChange: "transform" }}
    ></div>
  </div>
</div>


            </div>
        </>
    )
}