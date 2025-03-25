import '../index.css'
import bgCircleBlue600 from './img/pattern tech blue-600.jpg'
import bgCircleBlue300 from './img/pattern tech blue-300.jpg'
import bgCircleBlue200 from './img/pattern tech blue-200.jpg'
import potoRaapa from './img/poto_rapacool1_rb.png'
import cloudMove from './img/clouds.png'
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation"

export default function Home (){
    const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY * 1); // Menggeser elemen ke samping berdasarkan scrollY
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <>
            <div id='home' className="w-full h-[1000px] xl:h-[700px] relative z-[-999999] bg-blue-400 xl:flex flex-cols justify-center" >
                <div className='border-solid relative overflow-hidden pt-[200px] xl:pt-[50px] border-black bor m-[0px] xl:w-[60%] w-[100%] flex  justify-center items-center  '  >
                    <div className='reveal pl-[20px] pr-[20px]' >
                        <h1 className='drop-shadow-[2px_2px_5px_black] xl:text-start text-center text-6xl font-black bg-gradient-to-r from-[#020024] via-[#00007c] to-[#00d4ff] text-transparent bg-clip-text font-oswald'style={{ fontFamily: "Inter, sans-serif",  transform: `translateX(-${scrollX}px)` }} >Hi, I'm Raafa</h1>
                        <div className='xl:text-start text-center' style={{ transform: `translateX(-${scrollX}px)` }} >
                            <TypeAnimation className=' text-2xl xl:text-3xl font-medium' sequence={[
                                "I am a Front-end Wev Developer",
                                1000,
                                "I am a Back-end Web Developer",
                                1000,
                                "I am a Mobile Developer",
                                1000,
                            ]} wrapper='span' speed={30} repeat={Infinity} />

                        </div>
                        <h3 className='text-xl xl:text-start text-center mt-[20px]' style={{ transform: `translateX(-${scrollX}px)` }} >Saya adalah siswa berlatarbelakang IT yang saat ini menempuh pendidikan di SMKN 69 Jakarta. Saya memiliki kemampuan untuk mengimajenasikan dan mengaplikasikan inspirasi saya di sebuah website aplikasi yang dirancang dengan bahasa pemrograman yang dapat saya kuasai</h3>
                    </div>
                    <div className='w-[200px] h-[200px] animate-[cloudmove_15s_linear_infinite] ml-[-500px] mt-[-350px] z-[-99999] absolute bg-cover bg-center ' style={{ backgroundImage: `url(${cloudMove})`, transform: `translateX(-${scrollX}px)` }} ></div>
                </div>
                {/* //////////////batassssssssss kanan kiri///////////////// */}
                <div className='border-solid overflow-hidden box-border pr-[0px] pt-[50px] border-black bor m-[0px] w-full xl:w-[70%] relative flex justify-center items-center mt-[10px] z-[-9999]'>
                    <div className='reveal xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                    style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                        <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                        style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                            <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                            style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                        </div>
                    </div>
                <div className='reveal absolute flex z-[999999999999] w-[200px] h-[500px] bg-cover bg-center animate-[raafamove2_4s_linear_infinite] xl:animate-[raafamove_8s_linear_infinite] ' style={{ backgroundImage: `url(${potoRaapa})`,  transform: `translateX(${scrollX}px)` }} ></div>
                </div>
                <div class=" z-[999999] w-full overflow-hidden flex bottom-0 absolute whitespace-nowrap bg-gray-200 py-4">
                    <div class="flex w-max space-x-0 bottom-0 animate-[marque_20s_Linear_infinite]">
                        <p className='text-2xl  md:text-6xl uppercase mr-[50px] ' >🚀 Ini dibuat oleh My Princess Darling Honey Bunnny Sweety Love You🚀</p>
                    </div>
                    <div class="flex w-max space-x-0 bottom-0 animate-[marquee_20s_Linear_infinite]">
                        <p className='text-2xl  md:text-6xl uppercase mr-[50px] ' >🚀 Ini dibuat oleh My Princess Darling Honey Bunnny Sweety Love You🚀</p>
                    </div>
                    <div class="flex w-max space-x-0 bottom-0 animate-[marqueee_20s_Linear_infinite]">
                        <p className='text-2xl  md:text-6xl uppercase mr-[50px] ' >🚀 Ini dibuat oleh My Princess Darling Honey Bunnny Sweety Love You🚀</p>
                    </div>
                </div>
            </div>
        </>
    )
}