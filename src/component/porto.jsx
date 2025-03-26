import React, {useEffect, useRef } from 'react';
import potoProject1 from '../component/img/ssvideotron.png';
import potoProject2 from '../component/img/ssmycatatanbarang.png';
import potoProject3 from '../component/img/sscrudfiberapi.png';
import potoProject3_1 from '../component/img/sscrudphpnative.png';
import potoProject4 from '../component/img/ssmytictactoe.png'
import potoProject4_1 from '../component/img/ssflowerforclara.png'
import potoProject5 from '../component/img/ssprototypemobile.png'
import potoProject6 from '../component/img/ssposter.png'
import potoProject7 from '../component/img/ssalllogo.png'
import bgCircleBlue600 from './img/pattern tech blue-600.jpg'
import bgCircleBlue300 from './img/pattern tech blue-300.jpg'
import bgCircleBlue200 from './img/pattern tech blue-200.jpg'
import logoGithub from '../component/img/github.png'
import logoChrome from '../component/img/chrome.png'
import logoDrive from '../component/img/google-drive.png'
import logoFigma from '../component/img/figma.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../index.css'
import ScrollReveal from 'scrollreveal';

export default function Porto() {
    const swiperRef = useRef(null);

    return (
        <div id='port' className="w-full h-[4200px] xl:h-[4000px] flex flex-col items-center justify-center pb-[100px] overflow-hidden bg-blue-900 pt-[100px] z-[999]">
            <div className='w-full mb-[50px] m-auto flex flex-col justify-center items-center ' >
                <h1 className='text-5xl xl:text-8xl text-white font-black mb-[10px] drop-shadow-[3px_3px_10px_black] ' >My Portfolios</h1>
                <span className='font-black text-2xl xl:text-3xl text-white drop-shadow-[3px_3px_5px_black] ' >Let's see my projects !!</span>
            </div>
            <div className='block w-full justify-center items-center' >
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-start xl:items-center items-start overflow-hidden ' >  
                    <img src={potoProject1} alt="" className=' w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col justify-center xl:items-start items-start xl:text-left text-start' >
                        <h1 className='xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start' >Website Videotron <br />(Non Responsive Web)</h1>
                        <h3 className='xl:mt-[20px] mt-[0px] text-xl xl:text-2xl text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className=' xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://github.com/deFAl0-0per/web-videotron.git">
                                <div style={{backgroundImage: `url(${logoGithub})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start overflow-hidden ' >
                    <img src={potoProject2} alt="" className='w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start' >Website Catatan Barang <br />(Responsive Web)</h1>
                        <h3 className='xl:mt-[20px] mt-[0px] text-xl xl:text-2xl text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://daftarlist-raafa.vercel.app/">
                                <div style={{backgroundImage: `url(${logoChrome})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl ' ></div>
                            </a>
                            <a href="https://github.com/deFAl0-0per/daftarlist-raafa.git">
                                <div style={{backgroundImage: `url(${logoGithub})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start overflow-hidden ' >
                    <img src={potoProject3} alt="" className='w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col box-border justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='flex xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start'> API Postman CRUD Fiber Go </h1>
                        <h3 className='mt-[20px] text-2xl flex text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://github.com/deFAl0-0per/CRUD-Fiber-Go-Lang.git">
                                <div style={{backgroundImage: `url(${logoGithub})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start overflow-hidden ' >
                    <img src={potoProject3_1} alt="" className='w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col box-border justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='flex xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start'> CRUD with PHP Native </h1>
                        <h3 className='mt-[20px] text-2xl flex text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://github.com/deFAl0-0per/CRUD-PHP-MyBookStore.git">
                                <div style={{backgroundImage: `url(${logoGithub})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start overflow-hidden ' >
                    <img src={potoProject4} alt="" className='w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start' >Website Tic Tac Toe Game<br />(Responsive Web)</h1>
                        <h3 className='xl:mt-[20px] mt-[0px] text-xl xl:text-2xl text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://raafa-tic-tac-toe.vercel.app/">
                                <div style={{backgroundImage: `url(${logoChrome})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl ' ></div>
                            </a>
                            <a href="https://github.com/deFAl0-0per/my-tic-tac-toe.git">
                                <div style={{backgroundImage: `url(${logoGithub})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start overflow-hidden ' >
                    <img src={potoProject4_1} alt="" className='w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start' >Website Flower Animation <br />(Responsive Web)</h1>
                        <h3 className='xl:mt-[20px] mt-[0px] text-xl xl:text-2xl text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://flower-for-clara.vercel.app/">
                                <div style={{backgroundImage: `url(${logoChrome})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl ' ></div>
                            </a>
                            <a href="https://github.com/deFAl0-0per/flower-for-clara.git">
                                <div style={{backgroundImage: `url(${logoGithub})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start overflow-hidden ' >
                    <img src={potoProject5} alt="" className='w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start' >UI/UX Design E-Koperasi  <br />(Non Responsive Web)</h1>
                        <h3 className='xl:mt-[20px] mt-[0px] text-xl xl:text-2xl text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://www.figma.com/design/VHazTqUGQ0yGUaKTVCgcUK/Untitled?node-id=0-1&t=KWqWUWiBx1ppTHxH-1">
                                <div style={{backgroundImage: `url(${logoFigma})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] h-[350px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start xl:text-center text-start overflow-hidden ' >
                    <img src={potoProject6} alt="" className='w-[500px] xl:w-[400px] h-[200px] xl:h-[250px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start' >Design Logo (Figma) <br />(Non Responsive Web)</h1>
                        <h3 className='xl:mt-[20px] mt-[0px] text-xl xl:text-2xl text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://drive.google.com/drive/folders/1qHvM5u9f1qm55X1tKWXSFLpgAfOxLT5G?usp=sharing">
                                <div style={{backgroundImage: `url(${logoDrive})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
                <div className=' shadow-[5px_5px_15px] block xl:flex bg-white w-[90%] xl:h-[400px] h-[500px] rounded-2xl m-auto mb-[20px] xl:justify-between justify-normal xl:items-center items-start overflow-hidden ' >
                    <img src={potoProject7} alt="" className='w-[500px] xl:w-[400px] h-[280px] xl:h-[280px] flex m-5px rounded-2xl xl:ml-[20px] shadow-xl ' />
                    <div className='flex flex-col justify-center xl:items-start items-start xl:text-left text-center' >
                        <h1 className='xl:text-4xl text-xl ml-[20px] mt-[20px] xl:mt-[0px] xl:ml-[0px] font-black text-start xl:text-start' >Design Logo (Figma) <br />(Non Responsive Web)</h1>
                        <h3 className='xl:mt-[20px] mt-[0px] text-xl xl:text-2xl text-center m-auto ml-[20px] xl:ml-[0px]' >2024</h3>
                        <div className='xl:mt-[50px] w-full flex justify-end items-start mt-[0px] m-auto ' >
                            <a href="https://drive.google.com/drive/folders/1eiwJVel7Pzv1W60_3t6oS_VYPDHSJb2E?usp=sharing">
                                <div style={{backgroundImage: `url(${logoDrive})`}} className='bg-cover bg-center xl:w-[50px] w-[40px] xl:h-[50px] h-[40px] flex justify-center items-center rounded-2xl xl:ml-[30px] ml-[10px] xl:mr-[0px] mr-[10px] ' ></div>
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-[700px] md:w-[500px] w-[400px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[700px] md:h-[500px] h-[400px] rounded-full bg-blue-600 hidden xl:flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] mr-[-300px] '
                                        style={{ backgroundImage: `url(${bgCircleBlue600})`, transform: `translateX(${scrollX}px)` }}  >                        
                                            <div className='xl:w-[500px] md:w-[300px] w-[200px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[500px] md:h-[300px] h-[200px] rounded-full bg-blue-300 flex justify-center items-center shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] '
                                            style={{ backgroundImage: `url(${bgCircleBlue300})`, transform: `translateX(${scrollX}px)` }}  >
                                                <div className='xl:w-[300px] md:w-[200px] w-[100px] bg-cover bg-center animate-[spin_13s_linear_infinite] xl:h-[300px] md:h-[200px] h-[100px] flex rounded-full bg-blue-200 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)]'
                                                style={{ backgroundImage: `url(${bgCircleBlue200})`, transform: `translateX(${scrollX}px)` }}  ></div>
                                            </div>
                                        </div>
                </div>
            </div>
        </div>
    );
}
