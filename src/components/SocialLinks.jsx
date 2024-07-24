import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";

const SocialLinks = () => {

    const links =[
        {
            id:1,
            child:(
                <>
                LinkedIn <AiOutlineLinkedin size={30}/>
                </>
            ),
            href:`https://www.linkedin.com/in/sujeet-kumar-sharma8081/`,
            style:'rounded-tr-md'
        },

        
        {
            id:2,
            child:(
                <>
                GIthub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Sujeet-Sharma-08',
           
        },

        {
            id:3,
            child:(
                <>
                Mail <GoMail  size={30}/>
                </>
            ),
            href:'mailto:sujeetsharma80811@email.com',
          
        },

        {
            id:4,
            child:(
                <>
                Resume  <RiContactsLine size={30}/>
                </>
            ),
            href:`/sujeet-resume.pdf`,
            download:true,
            style:'rounded-br-md'
        },
    ];
            
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {
                links.map((link,index)=>{
                    return(<li key={link.id} className='flex justify-between items-center  w-40 h-14  px-4  ml-[-100px] 
                    hover:ml-[-10px] duration-500 hover:rounded-md  bg-gray-500 '>
                        <a href={link.href}
                        className='flex justify-between items-center w-full text-black'>{link.child} </a></li>  
                    )
                })
            } 
        </ul>
    </div>
  )
}

export default SocialLinks
