import React from 'react';

const Experience = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-white relative bg-black bg-opacity-70 rounded-xl p-8 max-w-6xl w-full 
        border-2 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
        transition-all duration-300">
        
        {/* Experience Heading */}
        <h2 className='text-3xl md:text-4xl font-bold mb-8 text-cyan-400 text-center neon-text'>
          Experience
        </h2>

        {/* Grid Layout for Experience Items */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Experience Item 1 */}
          <div className='group relative'>
            <div className='absolute -inset-0.5 bg-cyan-500/50 rounded-lg blur opacity-30 
              group-hover:opacity-50 transition duration-300'></div>
            <div className='relative p-6 bg-black/30 rounded-lg h-full'>
              <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>
                DevOps Trainee
              </h1>
              <p className='text-gray-300 italic mb-2'>QSpiders</p>
              <p className='text-gray-300 italic mb-4'>Starting April 2025</p>
              <p className='text-gray-300 leading-relaxed'>
              Joining QSpiders as a DevOps Trainee to build expertise in automation, deployment pipelines, and cloud infrastructure, while contributing to efficient development and operations workflows.
              </p>
            </div>
          </div>

          {/* Experience Item 2 
          <div className='group relative'>
            <div className='absolute -inset-0.5 bg-cyan-500/50 rounded-lg blur opacity-30 
              group-hover:opacity-50 transition duration-300'></div>
            <div className='relative p-6 bg-black/30 rounded-lg h-full'>
              <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>
                DevOps Engineer
              </h1>
              <p className='text-gray-300 italic mb-2'>ABC Corp</p>
              <p className='text-gray-300 italic mb-4'>Jun 2019 - Dec 2021</p>
              <p className='text-gray-300 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio minima atque commodi.
              </p>
            </div>
          </div>*/}

          {/* Experience Item 3 
          <div className='group relative'>
            <div className='absolute -inset-0.5 bg-cyan-500/50 rounded-lg blur opacity-30 
              group-hover:opacity-50 transition duration-300'></div>
            <div className='relative p-6 bg-black/30 rounded-lg h-full'>
              <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>
                Linux System Admin
              </h1>
              <p className='text-gray-300 italic mb-2'>DEF Inc</p>
              <p className='text-gray-300 italic mb-4'>Mar 2017 - May 2019</p>
              <p className='text-gray-300 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio minima atque commodi.
              </p>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Experience;