import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-screen h-full lg:h-screen  overflow-x-hidden'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full   '>
            {/* <div className='pb-8 '>
                <p className='text-4xl font-bold '>About</p>
            </div> */}
              <div >
                <p className='mt-12 text-3xl font-bold'>About Me</p>
                <p className='text-xl mt-2'>My introduction</p>
                  <p className='text-xl mt-10'>
                  Hey there,👋 I'm Sujeet Sharma a 22-Years-old <span className='text-blue-400 italic font-semibold'>Computer science and engineering </span> undergrad <br />
                      who is passionate about Software Development, <br />
                      Completed six months of Internship(Remote) as a <span className='text-blue-400 italic font-semibold'>frontend developer Intern.</span> 
                      <br />
                      I am working on developing professional and visually engaging web solutions,leveraging my strong programming skills in <span className='text-blue-400 italic font-semibold'>Java, C++ </span> and in <span className='text-blue-400 italic font-semibold'>Java Full Stack Development</span>.
                      and I have completed some impactfull tech projects while also nurturing my passion for technology.
                      And I'am  focusing on mastering <span className='text-blue-400 italic font-semibold'>Data Structures and Algorithms (DSA) </span > using <span className='text-blue-400 italic font-semibold'>Java </span>
                      And I am open to exciting opportunities in professional projects,research and connecting with industry professionals.
                  </p>
              </div>      
        </div>
    </div>
  )
}

export default About
