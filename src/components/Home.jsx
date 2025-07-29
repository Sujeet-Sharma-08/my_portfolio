import image from "../assets/user.png";
import { FaAngleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./styles/Home.css";

const Home = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Java Full Stack Developer",
  ];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0); // Track the current role
  const [charIndex, setCharIndex] = useState(0); // Track the current character index
  const [isDeleting, setIsDeleting] = useState(false); // Whether to delete or type
  const [speed, setSpeed] = useState(150); // Typing speed

  useEffect(() => {
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setCurrentRole((prev) => prev.slice(0, prev.length - 1)); // Delete characters
        setCharIndex((prev) => prev - 1); // Reduce character index
      }, speed);
    } else {
      typingTimeout = setTimeout(() => {
        setCurrentRole((prev) => prev + roles[roleIndex].charAt(charIndex)); // Type characters
        setCharIndex((prev) => prev + 1); // Increase character index
      }, speed);
    }

    // Complete word
    if (!isDeleting && charIndex === roles[roleIndex].length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false); // Stop deleting
      setRoleIndex((prev) => (prev + 1) % roles.length); // Move to the next role
    }

    return () => clearTimeout(typingTimeout); // Cleanup
  }, [charIndex, isDeleting, roleIndex, roles, speed]);

  return (
    <div name="home" className="h-screen w-[100vw]">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full  px-4 md:flex-row ">
        {/* left text */}
        <div className="md:w-1/2 flex flex-col justify-center h-full mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mt-10 md:-mt-20">Hi👋 I'm Sujeet Sharma and I'm a</h1>
          <h1 className="text-3xl md:text-5xl mb-5 md:mt-5  font-bold  text-blue-400">
            {currentRole}
            <span className="blinking-cursor">|</span> {/* Blinking cursor */}
          </h1>

          <a
            href="/sujeet-resume.pdf"
            download={true}
            className="w-[110px] h-[44px] flex items-center group
                bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm"
          >
            <button className="flex ml-5">
              Resume{" "}
              <span className="py-1 group-hover:rotate-90 duration-200">
                <FaAngleRight />
              </span>
            </button>
          </a>
        </div>

        {/* right image */}
        <div className="w-full md:w-1/2 max-w-md mt-10 ">
          <img
            src={image}
            height={280}
            width={280}
            alt="users image"
            className="rounded-2xl mx-auto hover:scale-110 duration-300 shadow-lg hover:shadow-blue-600 bg-gradient-to-r from-blue-500 to-green-800 h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
