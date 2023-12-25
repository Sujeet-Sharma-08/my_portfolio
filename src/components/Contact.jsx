import React from 'react'

const Contact = () => {

  return (
    <div id="contact"  className=' w-screen h-full lg:h-screen overflow-x-hidden
     md:h-screen   '>
        <div className='max-w-screen-lg h-full p-4 mx-auto flex flex-col justify-center'>
            <div className='class'>
                <p className='text-4xl font-bold  '>Contact</p>
                <p className=' text-2xl mt-2 '>Submit the form below to get in touch with <span className='text-blue-500'>me</span></p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bd4387e2-7c43-4697-87a9-8a352dd75005" method='POST'
                className='flex flex-col gap-1 w-full md:w-1/2 mt-5'>
                    <input type="text" name='name' placeholder='Your Name' required
                    className='py-2 pl-2 border-2 rounded-md border-blue-500
                    text-white focus:outline-none bg-transparent'/>

                    <input type="email" name='email' placeholder='Your Email' required
                    className='py-2 pl-2 border-2 rounded-md  border-blue-500
                    text-white focus:outline-none bg-transparent'/>

                    <textarea name="address" id="" cols="30" rows="10"
                    placeholder='Your Message' required
                    className='py-2 pl-2 border-2 rounded-md  border-blue-500
                    text-white focus:outline-none bg-transparent'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
                    >Let's talk</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact