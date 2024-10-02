import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const footer = () => {
  return (
    <div className='p-5 md:flex md:ites-center md:gap-20 md:justify-center bg-gradient-to-r from-cyan-500 to-blue-500'>

        <div className='flex flex-col  mt-5  '>
          <h2 className='font-semibold text-white'>Let's connect with Sujeet Sharma</h2>
          <h2 className='font-semibold text-white'>All reghts are reserved @2023</h2>
        </div>

          <div className='flex text-2xl text-white gap-5 mt-5 mr-20 '>
             <a href="https://www.linkedin.com/in/sujeet-kumar-sharma8081/"><FaLinkedin/></a>
             <a href="https://github.com/Sujeet-Sharma-08"><FaGithub/></a>
          </div>
          
    </div>   
   
  )
}

export default footer