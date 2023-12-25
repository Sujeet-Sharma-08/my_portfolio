import React from 'react'

const Qualification = () => {
  return (
    <div className='h-screen w-full mb-20 mt-10 '>
        <div className='max-w-screen-lg h-full mx-auto '>
              <div className='flex items-center justify-center flex-col'>
                <h1  className='text-4xl font-bold  hover:scale-105 duration-300'>Qualifications</h1>
                <p className='mt-3 text-xl'>My Educational Qualification</p>
              </div>

              {/* first section */}
              <div id="qualifications" className=' flex items-center justify-center gap-2  mt-10  mr-[76px] sm:gap-8'>
                     <div className='w-40 bg-white rounded-sm shadow-md ml-[-100px] '>
                        <p className='text-black mx-auto text-center mt-5 font-bold'>B.Tech Computer science & engineering</p>
                        <p className='text-black mx-auto text-center mt-2'>Abdul Kalam Technical University</p>
                        <p className='text-black mx-auto text-center mt-2 mb-2'>2020-2024</p>
                    </div>

                    <div className='flex items-center justify-center flex-col '>
                        <div className='w-6 h-6 rounded-full bg-slate-500  ' ></div>
                        <div className='w-2 h-48 bg-slate-500 ml-2 pb-2 mr-2'></div>
                    </div>     
              </div>

              {/* second section */}
              <div className='flex flex-row gap-2 justify-center items-center ml-[168px] sm:gap-8 sm:ml-[216px] '>
                    <div className=''>
                        <div className='w-6 h-6 rounded-full bg-slate-500 ' ></div>
                        <div className='w-2 h-48 bg-slate-500 ml-2 pb-2'></div>
                    </div>

                    <div className='w-40 bg-white rounded-sm shadow-md flex items-center mr-2 flex-col mt-4 '> 
                      <p className='text-black mx-auto text-center mt-5 font-bold  '>Senior Secondary School</p>
                      <p className='text-black mx-auto text-center mt-2'>GSAS Academy Harraiya Basti</p>
                      <p className='text-black  mb-2 mt-2'>2018-2020</p>
                    </div>
              </div>

              {/* third section */}
              <div className='flex flex-row gap-2 justify-center items-center mr-[174px] sm:gap-8'>

                    <div className='w-40 bg-white rounded-sm shadow-md flex items-center flex-col'>
                      <p className='text-black  mx-auto  font-bold mt-5'>Secondary School</p>
                      <p className='text-black mx-auto text-center mt-2'> GSM Public School Mitaipur Jeetipur  Basti</p>
                      <p className='text-black mt-2 mb-2'>2016-2018</p>
                    </div>

                    <div className=''>
                        <div className='w-6 h-6 rounded-full bg-slate-500  ' ></div>
                        <div className='w-2  h-44 bg-slate-500 ml-2 pb-2'></div>
                    </div>    
              </div>

        </div>
    </div>
  )
}

export default Qualification