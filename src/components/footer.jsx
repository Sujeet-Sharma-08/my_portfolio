import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const footer = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row'>

          <div className="w-full mx-auto max-w-screen-xl p-20  md:flex  md:items-center md:justify-between ">
              <span class="text-md  flex justify-center items-center sm:text-center">
                  <h2 className= 'text-white font-bold text-xl'> © sujeet sharma 2023 , </h2><span className='text-white'> All Rights Reserved</span>.
              </span>
          </div> 

          <div className='flex text-white gap-5 mt-5 mr-20 sm:hidden'>
             <a href="https://www.linkedin.com/in/sujeet-kumar-sharma8081/"><FaLinkedin/></a>
             <a href="https://github.com/Sujeet-Sharma-08"><FaGithub/></a>
          </div>
          
    </div>   
   
  )
}

export default footer