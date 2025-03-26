import React, {useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import potoSkill1 from '../component/img/logo html.png';
import potoSkill2 from '../component/img/tailwindcss.png';
import potoSkill3 from '../component/img/js.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import '../index.css'
import { TypeAnimation } from 'react-type-animation'
import potoSkill4 from '../component/img/science (1).png'
import potoSkill5 from '../component/img/fiber_logo.png'
import potoSkill6 from '../component/img/php.png'
import potoSkill7 from '../component/img/graphic-designer.png'
import potoSkill8 from '../component/img/drawing.png'
import potoSkill9 from '../component/img/conference.png'
import potoSkill10 from '../component/img/chat.png'
import cloudMove from '../component/img/clouds.png'
import potoRapa from '../component/img/poto_raapacool-rb.png'
import ScrollReveal from 'scrollreveal';

export default function Skills() {
    const swiperRef = useRef(null);

    return (
        <>
        
            <div id='skills' className="w-full h-[1100px] flex flex-col items-center overflow-hidden bg-blue-900 pt-[100px] z-[999]">
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
                <div className="shadow-[5px_5px_15px] w-[90%] xl:w-[90%] h-[700px] xl:h-[500px] xl:pt-[80px] inset-shadow-sm inset-shadow-black-500 bg-blue-300 flex items-center overflow-hidden relative">
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
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[80%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] flex m-auto text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki pemahaman yang kuat dalam HTML dan mampu mengimplementasikan berbagai elemen dengan struktur yang rapi, semantik yang baik, serta sesuai dengan standar pengembangan web modern.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[35px] w-[250px] xl:w-[350px] h-[150px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill2} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[80%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki pemahaman yang kuat dalam CSS dan mampu mengimplementasikan berbagai gaya dengan efisien untuk menciptakan tampilan yang responsif, menarik, dan sesuai standar desain modern.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill3} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[50%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >50%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki pemahaman dasar dalam JavaScript dan mampu mengimplementasikan logika dasar dalam pengembangan web. Saya sudah familiar dengan variabel, tipe data, operator, kondisi, perulangan, serta fungsi dalam JavaScript. Selain itu, saya dapat memanipulasi DOM untuk mengubah tampilan halaman secara dinamis dan menangani event handling dasar.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill4} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[60%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >60%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki pemahaman yang cukup baik dalam React.js, mencakup penggunaan komponen fungsional, state, props, serta hooks seperti useState dan useEffect untuk mengelola data dan efek dalam aplikasi. Saya mampu membangun antarmuka yang interaktif serta mengimplementasikan konsep component-based architecture untuk menjaga kode tetap modular dan reusable.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[30px] mt-[60px] w-[200px] xl:w-[200px] h-[100px] xl:h-[100px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill5} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[50%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >50%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki pemahaman dasar dalam mengimplementasikan Fiber di Go untuk membangun aplikasi web yang ringan dan cepat. Saya mampu membuat routing sederhana, menangani middleware, serta melakukan pengolahan request dan response menggunakan framework Fiber.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill6} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[30%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >30%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki pemahaman dasar dalam mengimplementasikan PHP untuk membangun aplikasi web sederhana. Saya mampu membuat skrip PHP dasar, menangani request dan response, serta menghubungkan aplikasi dengan database MySQL menggunakan ekstensi seperti MySQLi</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill7} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[80%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki keahlian yang kuat dalam desain grafis, dengan pemahaman yang baik tentang prinsip desain, komposisi, dan estetika visual. Saya mampu menggunakan berbagai perangkat lunak desain seperti Adobe Photoshop dan Figma untuk membuat desain yang menarik dan profesional.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill8} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[50%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >50%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki kemampuan dasar dalam menggambar sketsa dengan tingkat keterampilan sekitar 50%. Saya mampu membuat sketsa kasar dan konsep awal untuk berbagai jenis gambar, baik itu karakter, objek, maupun pemandangan.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill9} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[80%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >80%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki kemampuan yang kuat dalam public speaking, dengan tingkat keterampilan sekitar 80%. Saya mampu menyampaikan ide dan gagasan secara jelas, percaya diri, serta persuasif di berbagai situasi, baik dalam presentasi formal, diskusi, maupun sesi berbicara di depan umum.</p></div></SwiperSlide>
                        <SwiperSlide className=" flex pt-[0px] mb-[10px] xl:mb-[120px] items-center">
                            <img className='mb-[25px] w-[200px] xl:w-[200px] h-[200px] xl:h-[200px] m-auto drop-shadow-[0px_0_5px_5px_rgba(0,0,0,0.25)]' src={potoSkill10} alt="" />
                            <div className='relative w-[80%] h-[80px] xl:h-[50px] block justify-center overflow-hidden p-[5px] bg-white mb-[0px] rounded-2xl m-auto ' >
                                <div className='bg-emerald-500 h-[100%] z-[-999999] flex text-start justify-start pl-[5px] items-center  w-[90%]  rounded-tl-xl rounded-bl-xl ' >
                                    <h1 className='z-[999999] m-[10px] text-center absolute text-4xl xl:text-xl font-bold '  >90%</h1>
                                </div>
                            </div>
                            <div className='mt-[20px] bg-white w-[80%] m-auto flex justify-center items-center p-[10px] rounded-xl ' ><p>Saya memiliki kemampuan komunikasi yang sangat baik, dengan tingkat keterampilan mencapai 90%. Saya mampu menyampaikan informasi secara jelas, efektif, dan persuasif, baik dalam komunikasi verbal maupun non-verbal.</p></div></SwiperSlide>
                    </Swiper>
                    <button 
                        className="absolute w-[60px] xl:mb-[60px] mb-[400px] h-[60px] flex justify-center items-center cursor-pointer right-3 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaArrowRight className="text-blue-600 text-xl" />
                    </button>
                </div>
                <div className=' shadow-[5px_5px_15px] bg-white w-[90%] xl:w-[90%] h-[80px] xl:h-[100px] flex justify-center items-center rounded-bl-2xl rounded-br-2xl z-[9999999] ' >
                </div>
            </div>
        </>
    );
}
