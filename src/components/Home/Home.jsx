import React from 'react';
import infinite from '../assets/infinite.avif';
import { RiGithubFill, RiLinkedinFill, RiMailFill } from '@remixicon/react';

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-center w-full min-h-[calc(100vh-4rem)] px-6 md:px-20 pt-16 gap-8 md:gap-12">
      {/* Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[1.2]">
          Hello, I'm <span className="text-[#465697]">Preet</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed md:leading-loose">
          Aspiring DevOps Engineer with a strong interest in cloud infrastructure, passionate about building scalable solutions{' '}
          <span className="hidden md:inline"></span> optimizing systems and striving for peak performance.{' '}
          <br className="md:hidden" />
          <span className="md:hidden"> </span> 
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Download Resume Button */}
          <a href="/Preet_Resume.pdf" download>
            <button
              className="w-fit bg-[#465697] hover:bg-[#3a487f] text-white py-3 px-8 
              rounded-full text-lg font-semibold transition-all duration-300 
              hover:scale-105 shadow-lg transform"
            >
              Download Resume
            </button>
          </a>

          {/* Social Media Logos */}
          <div
            className="flex gap-6 items-center mt-4 md:mt-0"
            style={{ transform: 'translateY(10px)' }}
          >
            {/* GitHub Link */}
            <a
              href="https://github.com/Trippy-69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-all"
            >
              <RiGithubFill size={24} className="hover:scale-110 transition-transform duration-300" />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/preetkumargupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-all"
            >
              <RiLinkedinFill size={24} className="hover:scale-110 transition-transform duration-300" />
            </a>

            {/* Mail Link */}
            <a
              href="mailto:preetgupta2002@outlook.com?subject=Contacting%20through%20your%20website&body=Hi%20Preet,"
              className="text-gray-300 hover:text-cyan-400 transition-all"
            >
              <RiMailFill size={24} className="hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Image Container for Mobile */}
        <div className="md:hidden flex items-center justify-center mt-2 w-full"> {/* Adjusted margin-top to mt-2 */}
          <div className="relative w-[300px] h-[300px]"> {/* Restored original size */}
            <img
              className="w-full h-full object-contain animate-float"
              src={infinite}
              alt="Cloud Infrastructure"
            />
            <div className="absolute inset-0 bg-[#465697] opacity-10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Image Container for Desktop */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <div className="relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-contain animate-float"
            src={infinite}
            alt="Cloud Infrastructure"
          />
          <div className="absolute inset-0 bg-[#465697] opacity-10 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Home;