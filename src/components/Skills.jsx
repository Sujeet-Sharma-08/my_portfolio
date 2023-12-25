import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Github from '../assets/github.png'
import Git from '../assets/git..png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import React1 from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Express from '../assets/express.png'
import Cpp from '../assets/c++ image.png'
import Vercel from '../assets/vercel.jpg'

const technologies =[

    {
        id:1,
        skill:Cpp,
        title:'C++'
    },

    {
        id:2,
        skill:Html,
        title:'HTML'
    },

    {
        id:3,
        skill:Css,
        title:'CSS'
    },

    {
        id:4,
        skill:Tailwind,
        title:'TAILWIND CSS'  
    },

    {
        id:5,
        skill:Javascript,
        title:'JAVASCRIPT'
    },

    {
        id:6,
        skill:React1,
        title:'REACT'
    },

    {
        id:7,
        skill:Github,
        title:'GITHUB'    
    },

    {
        id:8,
        skill:Git,
        title:'GIT'
    },

    {
        id:9,
        skill:Node,
        title:'NODE'     
    },

    {
        id:10,
        skill:Express,
        title:'EXPRESS'    
    },

    {
        id:11,
        skill:Vercel,
        title:'VERCEL'
    }

];


const Skills = () => {
  return (
    <div id="skills" className=' w-screen h-full lg:h-screen  overflow-x-hidden   '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full '>
            <p className='text-4xl font-bold '>Skills</p>
            <p className='py-6 text-xl '>My Technical Skills</p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 px-12 sm:px-0 py-12'>
                {
                    technologies.map((technology)=>{
                        return(
                            <div key={technology.id} 
                            className='shadow-md shadow-gray-600 hover:scale-105 duration-500 py-2 rounded-lg' >
                                <img src={technology.skill} alt="Skills-Image"
                                 className='w-20 mx-auto'/>
                                <p className='mt-4 text-center'>{technology.title}</p>
                            </div>
                    )})
                } 
           </div>
        </div>
    </div>

    
  )
}

export default Skills;