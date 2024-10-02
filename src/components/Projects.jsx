import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import onetouch from '../assets/one touch agency.png';
import sja from '../assets/sja care.png';

const data = [
    {
        id: 1,
        projectName:'SJA Care Center',
        pic: sja,
        text: "This website is for Dr. D S Dubey is a well-known chiropractor in Mumbai, highly praised for treating chronic pain like back pain, sciatica, and frozen shoulder.",
        url: `https://sjacarecenter.com/`
    },
    {
        id: 2,
        projectName:'One Touch Agency',
        pic: onetouch,
        text: `It's an event management platform, where you can directly connect with the managing director and get your event successfully done.`,
        url: `https://onetouchagency.com/`
    },
    // Add more items here if necessary
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="projects" className="mt-10 mb-20">
            <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-bold hover:scale-105 duration-300">Projects</div>
                <p className="mt-3 text-xl">Our latest projects that we have successfully completed are here.</p>
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.id} className="p-4">
                            <div className="flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md my-4 p-6 shadow-lg">
                                <p className='text-2xl hover:scale-105 hover:font-bold transition-all duration-300 font-semibold mb-5'>{d.projectName}</p>
                                <div className="w-full h-[12rem] mb-6">
                                    <img src={d.pic} alt="" className="w-full h-full object-cover rounded-md" />
                                </div>
                                <div className="text-center text-white">
                                    <p className="font-medium mb-4">{d.text}</p>
                                    <a href={d.url} target="_blank" rel="noopener noreferrer">
                                        <button className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md hover:scale-110 duration-300 transition-all">Check out the project</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
