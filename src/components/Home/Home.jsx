import React from 'react'
import infinite from '../assets/infinite.avif'
import { RiGithubFill, RiLinkedinFill, RiMailFill } from '@remixicon/react'

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-center w-full min-h-[calc(100vh-4rem)] px-6 md:px-20 pt-16 gap-8 md:gap-12">
      {/* Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[1.2]">
          Hello, I'm <span className="text-[#465697]">Preet</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed md:leading-loose">
          Cloud & DevOps Engineer passionate about building scalable solutions{" "}
          <span className="hidden md:inline">and</span> optimizing infrastructure{" "}
          <br className="md:hidden" />
          <span className="md:hidden">and </span>for peak performance.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <button className="w-fit bg-[#465697] hover:bg-[#3a487f] text-white py-3 px-8 
            rounded-full text-lg font-semibold transition-all duration-300 
            hover:scale-105 shadow-lg transform">
            Download Resume
          </button>

          {/* Social Media Logos */}
          <div className="flex gap-6 items-center mt-4 md:mt-0" style={{ transform: 'translateY(10px)' }}> {/* Increased translateY */}
            <a href="https://github.com" className="text-gray-300 hover:text-cyan-400 transition-all">
              <RiGithubFill size={24} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-cyan-400 transition-all">
              <RiLinkedinFill size={24} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="mailto:youremail@example.com" className="text-gray-300 hover:text-cyan-400 transition-all">
              <RiMailFill size={24} className="hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <img 
            className="w-full h-full object-contain animate-float"
            src={infinite} 
            alt="Cloud Infrastructure" 
          />
          <div className="absolute inset-0 bg-[#465697] opacity-10 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </div>
  )
}

export default Home
