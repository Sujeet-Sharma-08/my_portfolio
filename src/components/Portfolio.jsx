import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import usestate from '../assets/portfolio/usestate.jpg'


const Portfolio = () => {


    const porfolios = [
    {
        id:1,
        src:arrayDestruct
    },

    {
        id:2,
        src:installNode
    },

    {
        id:3,
        src:navbar
    },

    {
        id:4,
        src:reactParallax
    },

    {
        id:5,
        src:reactSmooth
    },

    {
        id:6,
        src:reactWeather
    },

];



  return (
    <div id="portfolio" 
    className=' w-screen h-full lg:h-screen overscroll-none
     md:h-screen  '>
        <div className='max-w-screen-lg h-full p-4 mx-auto flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold  capitalize  '>portfolio</p>
                    <p className='py-6  text-xl '>Check out some of my work right here </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                    porfolios.map((portfolio)=>{
                         return(
                            <div  key={portfolio.id} className='shadow-md shadow-gray-600 rounded-lg '>
                                <img  src={portfolio.src} alt=" portfolio-image" 
                                    className='hover:scale-105 duration-200 rounded-md'/>
                                <div className='py-2 flex justify-center items-center gap-5'>
                                    <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        )})}  
                </div>    
        </div>        
    </div>
  )
}

export default Portfolio