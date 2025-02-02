import React from 'react';
import Aboutimg from '../assets/About.png';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-white relative bg-black bg-opacity-70 rounded-xl p-8 max-w-4xl w-full 
        border-2 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
        transition-all duration-300">
        
        {/* About Heading */}
        <h2 className='text-3xl md:text-4xl font-bold mb-8 text-cyan-400 text-center neon-text'>
          About
        </h2>

        {/* Content Container */}
        <div className='flex flex-col md:flex-row gap-8 items-start mt-10'>
          {/* Image Section */}
          <div className='w-full md:w-1/3 flex justify-center'>
            <img 
              className='w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-2 border-cyan-400 
              shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              src={Aboutimg} 
              alt='About' 
            />
          </div>

          {/* Content Section */}
          <div className='w-full md:w-2/3 space-y-6'>
            <div className='group relative'>
              <div className='absolute -inset-0.5 bg-cyan-500/50 rounded-lg blur opacity-30 
                group-hover:opacity-50 transition duration-300'></div>
              <div className='relative p-4 bg-black/30 rounded-lg'>
                <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>DevOps</h1>
                <p className='text-gray-300 leading-relaxed'>
                I focus on streamlining development by fostering collaboration between dev and ops teams, automating workflows, and ensuring faster, more reliable software delivery.
                </p>
              </div>
            </div>

            <div className='group relative'>
              <div className='absolute -inset-0.5 bg-cyan-500/50 rounded-lg blur opacity-30 
                group-hover:opacity-50 transition duration-300'></div>
              <div className='relative p-4 bg-black/30 rounded-lg'>
                <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>Cloud</h1>
                <p className='text-gray-300 leading-relaxed'>
                Experienced in working with Azure to build scalable, secure cloud infrastructures, automate deployments, and optimize resources for cloud-native applications.
                </p>
              </div>
            </div>

            <div className='group relative'>
              <div className='absolute -inset-0.5 bg-cyan-500/50 rounded-lg blur opacity-30 
                group-hover:opacity-50 transition duration-300'></div>
              <div className='relative p-4 bg-black/30 rounded-lg'>
                <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>Linux</h1>
                <p className='text-gray-300 leading-relaxed'>
                Skilled in using Linux commands and basic shell scripting to automate tasks, manage servers, and optimize system performance in production environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;