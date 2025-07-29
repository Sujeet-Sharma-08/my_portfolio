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
import Mongodb from '../assets/mongodb.png'
import Vercel from '../assets/vercel.jpg'

import Java from '../assets/java.png'
import SpringBoot from '../assets/spring boot.png'

const technologies =[

    {
        id:1,
        skill:Cpp,
        title:'C++'
    },
    {  
        id:2,
        skills:java,
        title: 'Java'  
    },
    {
        id:3,
        skills:SpringBoot,
        title: 'Spring Boot'   
    },

    {
        id:4,
        skill:Html,
        title:'HTML'
    },

    {
        id:5,
        skill:Css,
        title:'CSS'
    },

    {
        id:5,
        skill:Tailwind,
        title:'TAILWIND CSS'  
    },

    {
        id:7,
        skill:Javascript,
        title:'JAVASCRIPT'
    },

    {
        id:8,
        skill:React1,
        title:'REACT'
    },

    {
        id:9,
        skill:Github,
        title:'GITHUB'    
    },

    {
        id:10,
        skill:Git,
        title:'GIT'
    },

    {
        id:11,
        skill:Node,
        title:'NODE'     
    },

    {
        id:12,
        skill:Express,
        title:'EXPRESS'    
    },

    {
        id:13,
        skill:Mongodb,
        title:'MONGODB'    
    },

    {
        id:14,
        skill:Vercel,
        title:'VERCEL'
    }

];


const Skills = () => {
  return (
    <div id="skills" className=' w-screen h-full lg:h-screen  overflow-x-hidden   '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
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
