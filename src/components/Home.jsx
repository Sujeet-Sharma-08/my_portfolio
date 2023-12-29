import React, { useState } from 'react'
import image from '../assets/user.png'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-scroll';


const Home = () => {

  
  return (

    <div name="home"
    className='h-screen w-[100vw]'>
        <div className='max-w-screen-lg  mx-auto flex flex-col justify-center 
        items-center h-full  px-4 md:flex-row '>
            {/* left text */}
            <div className='flex flex-col justify-center h-full mt-16'>
                <h2 className='text-4xl font-bold sm:text-7xl  mt-10 '>I'm a  <span 
                className='text-blue-500 hover:scale-110 duration-300 '>Full Stack</span>  Developer</h2>
                <p className=' text-gray-500 py-4 max-w-md text-3xl font-bold'>
                    with MERN Stack tecnology
                </p>

                {/* <div className=' w-[110px] h-[44px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm  '>
                    <Link to='portfolio'  smooth duration={500} className='group flex py-2 pl-2 '> portfolio <span
                     className='py-1 group-hover:rotate-90 duration-200'>< FaAngleRight /></span></Link>
                </div> */}

                
                <a href="/sujeet-resume.pdf" download={true} className='w-[110px] h-[44px] flex items-center group
                bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm'><button className='flex ml-5'>Resume <span
                className='py-1 group-hover:rotate-90 duration-200'>< FaAngleRight /></span></button></a>
            </div>


            {/* right image */}
            <div className='w-full max-w-md mt-10 '>
                <img src={image} height={280} width={280}   alt="users image"
                className='rounded-2xl mx-auto hover:scale-110 duration-300 shadow-lg hover: shadow-blue-600
                 bg-gradient-to-r from-blue-500 to-green-800 h-full  ' />
            </div>
        </div>
 
    </div>
  )
}

export default Home