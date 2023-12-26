import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-screen h-full lg:h-screen  overflow-x-hidden'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full   '>
            {/* <div className='pb-8 '>
                <p className='text-4xl font-bold '>About</p>
            </div> */}
              
              <div >
                <p className='text-3xl font-bold'>About Me</p>
                <p className='text-xl mt-2'>My introduction</p>
                  <p className='text-xl mt-10'>
                  Hey there,👋 I'm Sujeet Sharma a 21-Years-old <span className='text-blue-400'>computer science and engineering <br /></span> 
                      undergrad who is passionate about Software Development, <br />
                      Right now - I'm looking for an opportunity where I can use my skills and can contribute in large projects.
                      Currentyl, I'am  focusing on mastering <span className='text-blue-400'>Data Structures and Algorithms </span > using <span className='text-blue-400'>C++ </span>
                      Language and deeping dive in the world of Full-Stack web development using <span className='text-blue-400'>MERN STACK. </span> 
                  </p>

              </div>      

        </div>
    </div>
  )
}

export default About