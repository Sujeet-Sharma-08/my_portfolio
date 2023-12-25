import React from 'react'
import KEVIN from '../assets/portfolio image.png'
import PORTFOLIO from '../assets/React-portfolio .png'


const data =[
    {
        id:1,
        pic:KEVIN,
        text:`Kevin Portfolio using Html, Css and Javascript.`,
        url:`https://kevin-portfolio-8d78qym8e-sujeet-kumar-sharmas-projects.vercel.app`
    },
    {
        id:2,
        pic:PORTFOLIO,
        text:`My Personal portfolio website using React and Tailwind with clean UI.`
    }
];


const Projects = () => {
  return(
    <div id="projects" className='mt-10 mb-20'>
        <div className='flex flex-col items-center justify-center'>
            <div className='text-4xl font-bold  hover:scale-105 duration-300' >Projects</div>
            <p className='mt-3 text-xl '>our latest project is here</p>
        </div>

        <div className='mt-20'>
            {
                data.map((d)=>{
                    return(
                        <div key={d.id} className=' flex max-w-2xl bg-slate-400 rounded-md my-4 mx-auto'>
                            <div className='max-w-lg py-10 rounded-md sm:flex mr-20 gap-5 mx-auto hover:scale-105 duration-300'>
                                <div>
                                <img src={d.pic} alt="" height={1000} width={1000} className='ml-10' />
                                </div>
                                <div className='text-center ml-10'>
                                    {d.text}
                                    <a href={d.url}>
                                        <button className='py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>check it</button>
                                    </a>
                                </div>
                                
                                

                            </div>
                            

                        </div>
                    )
                })
            }

        </div>

    

  
    </div>
  )
};
   

export default Projects