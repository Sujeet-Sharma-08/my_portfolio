import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
// import { NavLink } from "react-router-dom";

const links =[
    {
    id:1,
    tab:'home'
    },

    {
     id:2,
     tab:'about'
     },

    // {
    // id:3,
    // tab:'portfolio'
    //  },

     {
      id:3,
      tab:'qualifications'
     },

     {
    id:4,
    tab:'skills'
    },

    {
      id:5,
      tab:'projects',
     },

    {
    id:6,
    tab:'contact'
     },  
              
   ];

const Navbar = ( {darkMode, setdarkMode}) => {
  
  const[nav, setNav]= useState(false);

  function navHandle(){
    setNav(!nav);
  }
  return (
    <div className='flex justify-between items-center w-full flex-wrap h-20 fixed  
     px-4 py-6 bg-white  text-black dark:bg-gray-900 dark:text-white shadow-md dark:shadow-lg'>
      
        <div className='text-4xl sm:text-5xl font-bold font-signature  hover:scale-110 duration-300'><a href="#">Sujeet</a></div>

        <ul className='hidden gap-5 md:flex ml-10 md:gap-2 lg:gap-8 '>
              {
                links.map((link)=><li key={link.id}
                className='cursor-pointer list-none text-xl capitalize font-semibold text-gray-500 
                hover:scale-105 duration-200'
                ><Link to={link.tab}  offset={-30} smooth={true} duration={300}>{link.tab}</Link></li> )
              }
        </ul>

        <div className=' item-center cursor-pointer mr-10 '
          onClick={()=>setdarkMode(!darkMode)}>
            {
              darkMode ? <LuSun size={30} /> : <FiMoon size={30} />
            } 
        </div>

        <div className='cursor-pointer mr-4 text-gray-500 md:hidden'
          onClick={navHandle}>
          {
            nav ? <RxCross2 size={30} /> : <TiThMenu size={30}/> 
          }
       </div>

       {
        nav && (
          <ul className='flex flex-col justify-center items-center gap-3 absolute top-20
            left-0  lg:w-full h-screen bg-gradient-to-b from-black to-gray-800 
            text-gray-500 '>
            {
              links.map((link)=><li key={link.id}
              className='px-4 cursor-pointer capitalize text-4x
              '>
              <Link onClick={()=>setNav(!nav)} to={link.tab} smooth duration={500}> {link.tab}</Link></li> )
            }
          </ul>
        )}
       
    </div>
  )
}

export default Navbar