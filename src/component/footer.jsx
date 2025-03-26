import '../index.css'
import potoPortGeneral1 from '../component/img/coverportgeneral.png';
import potoPortGeneral2 from '../component/img/portgeneral2.png';
import potoPortGeneral3 from '../component/img/portgeneral3.png';
import potoPortGeneral4 from '../component/img/portgeneral4.png';
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export default function Footer () {
    return (
        <>
            <div className='bg-white w-full h-[1000px] flex relative overflow-hidden ' >
                <div className='m-auto flex flex-col justify-center items-center'>
                    <div className='flex xl:flex-row flex-col ' >
                        <div className='xl:pr-[100px] pr-[0px] xl:ml-[20px] ml-[20px] mr-[] flex flex-col box-border w-full '>
                            <h1 className='  xl:text-8xl text-5xl flex xl:mr-[50px] mr-[0px] xl:mb-[30px] mb-[20px] drop-shadow-[2px_2px_1px] ' >Wanna see my General Portfolio? </h1>
                            <div className=' flex w-full flex-row xl:mb-[0px] mb-[80px] ' >
                                <a href="https://www.instagram.com/p/DFgbJGGTalw/?igsh=MTFmczlmbnFkbWxwaw==">
                                    <div className='w-[150px] xl:w-[200px] shadow-[-4px_4px_20px] hover:bg-blue-800 h-[50px] bg-blue-400 rounded-3xl justify-center items-center flex ' >
                                        <h3 className='xl:text-xl text-[20px]' >The first one</h3>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/p/DFgbUfMzHIc/?igsh=dW9xODQ1MzZmdzU0">
                                    <div className='w-[150px] xl:w-[200px] shadow-[-4px_4px_20px] hover:bg-blue-800 h-[50px] bg-blue-400 rounded-3xl justify-center items-center flex ml-[30px] ' >
                                        <h3 className='xl:text-xl text-[20px]' >The second one</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className=' flex flex-col xl:ml-[50px] xl:mr-[50px] mr-[0px] shadow-[-5px_5px_20px] ' >
                            <div className='flex flex-row justify-center items-center w-full' >
                                <div style={{backgroundImage: `url(${potoPortGeneral1})`}} className=' w-[200px] h-[200px] bg-cover bg-center ' ></div>
                                <div style={{backgroundImage: `url(${potoPortGeneral2})`}} className=' w-[200px] h-[200px] bg-cover bg-center ' ></div>
                            </div>
                            <div className='flex flex-row justify-center items-center w-full' >
                                <div style={{backgroundImage: `url(${potoPortGeneral3})`}} className=' w-[200px] h-[200px] bg-cover bg-center ' ></div>
                                <div style={{backgroundImage: `url(${potoPortGeneral4})`}} className=' w-[200px] h-[200px] bg-cover bg-center ' ></div>
                            </div>
                        </div>
                    </div>
                    <h1 className=' text-6xl font-black w-full h-[100px] flex justify-center items-center mt-[100px] mb-[50px] drop-shadow-[2px_2px_1px] ' >Thank You</h1>
                </div>
            </div>
        </>
    )
}