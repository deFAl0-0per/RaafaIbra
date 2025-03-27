import React, {useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import potoSkill1 from './img/logo html.png';
import potoSkill2 from './img/tailwindcss.png';
import potoSkill3 from './img/js.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import '../index.css'
import { TypeAnimation } from 'react-type-animation'
import potoSkill4 from './img/science (1).png'
import potoSkill5 from './img/fiber_logo.png'
import potoSkill6 from './img/php.png'
import potoSkill7 from './img/graphic-designer.png'
import potoSkill8 from './img/drawing.png'
import potoSkill9 from './img/conference.png'
import potoSkill10 from './img/chat.png'
import cloudMove from './img/clouds.png'
import potoRapa from './img/poto_raapacool-rb.png'
import ScrollReveal from 'scrollreveal';

export default function Skills() {
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
      });
    const swiperRef = useRef(null);

    return (
        <>
        
            <div id='skills' className="w-full h-[1000px] flex flex-col items-center overflow-hidden bg-blue-900 pt-[100px] z-[999]">
                <div className='xl:w-[200px] w-[100px] xl:h-[200px] h-[100px]  animate-[cloudmove2sm_5s_linear_infinite] xl:animate-[cloudmove2_15s_linear_infinite] ml-[0px] mt-[-50px] z-[99999] absolute bg-cover bg-center ' style={{ backgroundImage: `url(${cloudMove})`, transform: `translateX(-${scrollX}px)` }} ></div>
                <div className='xl:w-[300px] w-[150px] xl:h-[300px] h-[150px]  animate-[cloudmove3sm_5s_linear_infinite] xl:animate-[cloudmove2_20s_linear_infinite] ml-[0px] xl:mt-[600px] mt-[700px]  z-[99999999] absolute bg-cover bg-center ' style={{ backgroundImage: `url(${cloudMove})`, transform: `translateX(-${scrollX}px)` }} ></div>
                <div>
                    
                </div>
                <div className= 'reveal shadow-[5px_5px_15px] bg-white w-[90%] xl:w-[90%] h-[80px] xl:h-[100px] flex justify-center items-center rounded-tl-2xl rounded-tr-2xl ' >
                <TypeAnimation className=' uppercase text-2xl xl:text-3xl font-bold' sequence={[
                                    "My Soft Skills",
                                    2000,
                                    "My Hard Skills",
                                    2000,
                                ]} wrapper='span' speed={30} repeat={Infinity} />
                </div>
                <div className="reveal shadow-[5px_5px_15px] w-[90%] xl:w-[90%] h-[700px] xl:h-[500px] xl:pt-[80px] inset-shadow-sm inset-shadow-black-500 bg-blue-300 flex items-center overflow-hidden relative">
                    <div className='absolute flex ' >
                        <img src={potoRapa} alt="gambar rapa" className='w-[100px] xl:w-[200px] ml-[50px] mt-[600px] xl:mt-[0px] ' />
                    </div>
                    <button 
                        className="absolute w-[60px] xl:mb-[60px] mb-[400px] h-[60px] flex justify-center items-center cursor-pointer left-3 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                        onClick={() => swiperRef.current?.slidePrev()}>
                        <FaArrowLeft className="text-blue-600 text-xl" />
                    </button>
                    <Swiper 
                        modules={[Navigation, EffectCoverflow]} 
                        spaceBetween={5} 
                        slidesPerView={1} 
                        grabCursor
                        loop
                        centeredSlides={true}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 0,
                            slideShadows: true,
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="w-full flex justify-center items-center">
                        <SwiperSlide className="flex pt-[0px] mb-[0px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill1} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px]' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[10px] items-center  w-[80%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] flex m-auto text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >HTML</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have a strong understanding of HTML and am capable of implementing various elements with a clean structure, good semantics, and in accordance with modern web development standards.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[35px] w-[250px] xl:w-[350px] h-[150px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill2} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[100%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >TailwindCSS</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have a strong understanding of CSS and am capable of efficiently implementing various styles to create a responsive, visually appealing design that adheres to modern design standards.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill3} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[50%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >50%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >Javascript</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have a basic understanding of JavaScript and am capable of implementing basic logic in web development. I am familiar with variables, data types, operators, conditionals, loops, and functions in JavaScript. Additionally, I can manipulate the DOM to dynamically modify the page layout and handle basic event handling.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill4} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[60%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >60%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >React JS</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have a good understanding of React.js, including the use of functional components, state, props, and hooks such as useState and useEffect to manage data and effects in applications. I am capable of building interactive user interfaces and implementing the component-based architecture concept to keep the code modular and reusable.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[30px] mt-[60px] w-[200px] xl:w-[200px] h-[100px] xl:h-[100px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill5} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[50%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >50%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >Fiber Go </h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have a basic understanding of implementing Fiber in Go to build lightweight and fast web applications. I am capable of creating simple routing, handling middleware, and processing requests and responses using the Fiber framework.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill6} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[30%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >30%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >PHP</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have a basic understanding of implementing PHP to build simple web applications. I am capable of creating basic PHP scripts, handling requests and responses, and connecting the application to a MySQL database using extensions like MySQLi.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill7} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[80%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >Graphic Design</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have a basic understanding of implementing PHP to build simple web applications. I am capable of creating basic PHP scripts, handling requests and responses, and connecting the application to a MySQL database using extensions like MySQLi.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill8} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[50%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >50%</h1>
                                </div> */}
                                <h1 className='flex text-center text-4xl' >Drawing</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have basic sketching skills. I am capable of creating rough sketches and initial concepts for various types of images, whether it's characters, objects, or landscapes.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill9} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[80%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div> */}
                                <h1 className='flex text-center text-3xl' >Public Speaking</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have strong public speaking skills. I am capable of presenting ideas and concepts clearly, confidently, and persuasively in various situations, whether in formal presentations, discussions, or public speaking events.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill10} alt="" />
                            <div className='relative w-max h-[80px] xl:h-[50px] flex justify-center items-center overflow-hidden pl-[50px] pr-[50px] bg-white mb-[0px] rounded-full m-auto shadow-[3px_3px_2px] ' >
                                {/* <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[90%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >90%</h1>
                                </div> */}
                                <h1 className='flex text-center text-3xl' >Communicate Well</h1>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl shadow-[3px_3px_5px] ' ><p>I have excellent communication skills. I am able to convey information clearly, effectively, and persuasively, both in verbal and non-verbal communication.</p></div></SwiperSlide>
                    </Swiper>
                    <button 
                        className="absolute w-[60px] xl:mb-[60px] mb-[400px] h-[60px] flex justify-center items-center cursor-pointer right-3 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaArrowRight className="text-blue-600 text-xl" />
                    </button>
                </div>
                <div className='reveal shadow-[5px_5px_15px] bg-white w-[90%] xl:w-[90%] h-[80px] xl:h-[100px] flex justify-center items-center rounded-bl-2xl rounded-br-2xl z-[9999999] ' >
                </div>
            </div>
        </>
    );
}
