import '../index.css'
import React,{useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import ScrollReveal from 'scrollreveal';

export default function Navbar () {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
        <>
            <div className='w-full h-[50px] flex justify-center items-center fixed mt-[80px] z-[999999999999999] ' >
                <ul className='hidden md:flex' >
                    <li><a href="#home" className='text-white text-2xl opacity-100 flex mr-10 m-auto transition duration-300 hover:text-blue-400' >home</a></li>
                    <li><a href="#skills" className='text-white text-2xl opacity-100 flex mr-10 m-auto transition duration-300 hover:text-blue-400' >skills</a></li>
                    <li><a href="#port" className='text-white text-2xl opacity-100 flex mr-10 m-auto transition duration-300 hover:text-blue-400'>portfolio</a></li>
                    <li><a href="#doc" className='text-white text-2xl opacity-100 flex m-auto transition duration-300 hover:text-blue-400'>doc</a></li>
                </ul>
                <div className='w-full h-full opacity-80 bg-blue-900 absolute z-[-9999]' ></div>
                    <div onClick={handleNav} className='block md:hidden fixed right-[10px] ' >
                        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
                    </div>

                    <div className={nav? 'fixed h-full left-0 top-0 w-[60%] bg-blue-950 ease-in-out duration-700 flex justify-start items-start ' : 'fixed left-[-100%] '} >
                        <h1 className="flex text-center text-5xl font-bold text-white m-[10px] fixed ">Hello</h1>
                        <ul className='block mt-[70px] ml-[10px] ' >
                            <li><a href="#home" className='text-white text-3xl opacity-100 flex mr-10 m-auto transition duration-300 hover:text-blue-400' >home</a></li>
                            <li><a href="#skills" className='text-white text-3xl opacity-100 flex mr-10 m-auto transition duration-300 hover:text-blue-400' >skills</a></li>
                            <li><a href="#port" className='text-white text-3xl opacity-100 flex mr-10 m-auto transition duration-300 hover:text-blue-400'>portfolio</a></li>
                            <li><a href="#doc" className='text-white text-3xl opacity-100 flex m-auto transition duration-300 hover:text-blue-400'>doc</a></li>
                        </ul>
                    </div>

            </div>
            <div className='bg-black w-full h-[80px] z-[999999999] fixed mx-aut  flex justify-center items-center' >
                <h1 className="flex text-center animate-pulse text-5xl font-bold bg-gradient-to-r from-[#1900bd] via-[#0000ff] to-[#00d4ff] text-transparent bg-clip-text m-auto fixed " >Hello</h1>
            </div>
        </>
    )
}