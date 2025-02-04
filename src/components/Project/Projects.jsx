import React, { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Moodify App",
      description: "Application which will play music according to the user's mood",
      githubLink: "https://github.com/Trippy-69/Moodify-react-app",
    },
    {
      title: "DevOps Pipeline",
      description: "A CI/CD pipeline for ToDo App automating software delivery using Jenkins and Docker.",
      githubLink: "https://github.com/Trippy-69",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleNext = () => {
    if (visibleIndex < projects.length - 1) {
      setVisibleIndex(visibleIndex + 1);
    }
  };

  const handlePrev = () => {
    if (visibleIndex > 0) {
      setVisibleIndex(visibleIndex - 1);
    }
  };

  const currentProject = projects[visibleIndex];

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Increased container size to max-w-4xl */}
      <div className="relative bg-black bg-opacity-70 rounded-2xl p-8 max-w-4xl w-full
        border-2 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
        transition-all duration-500 overflow-hidden">
        
        <h2 className='text-3xl md:text-4xl font-bold mb-8 text-cyan-400 text-center neon-text'>
          Projects
        </h2>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-30">
          <button
            onClick={handlePrev}
            className="text-white text-xl md:text-4xl p-2 md:p-5 rounded-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 ease-in-out
              shadow-lg hover:shadow-xl disabled:opacity-50"
            disabled={visibleIndex === 0}
          >
            &#8592;
          </button>
        </div>

        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-30">
          <button
            onClick={handleNext}
            className="text-white text-xl md:text-4xl p-2 md:p-5 rounded-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 ease-in-out
              shadow-lg hover:shadow-xl disabled:opacity-50"
            disabled={visibleIndex === projects.length - 1}
          >
            &#8594;
          </button>
        </div>

        {/* Project Display */}
        <div className="relative flex justify-center items-center">
          {/* Background Projects (Blurred) */}
          <div className="absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transform scale-95 opacity-50 blur-lg transition-all duration-500 z-10">
            {/* Only render the first two projects */}
            {projects.slice(0, 2).map((project, index) => (
              <div key={index} className={`transition-all ${index !== visibleIndex ? 'scale-90 opacity-50' : ''}`}>
                <div className='relative p-6 bg-black/30 rounded-lg min-h-[300px] flex flex-col'>
                  <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>
                    {project.title}
                  </h1>
                  <p className='text-gray-300 leading-relaxed flex-grow'>
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mt-4 inline-block px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg 
                      hover:bg-cyan-600 transition duration-300 text-center'
                  >
                    See Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Active (Visible) Project (Pop-out effect) */}
          <div className="relative p-6 bg-black/70 rounded-lg max-h-[400px] min-h-[300px] flex flex-col transform scale-105 z-20 transition-all duration-500 ease-in-out">
            <h1 className='text-xl md:text-2xl font-semibold text-cyan-400 mb-2'>
              {currentProject.title}
            </h1>
            <p className='text-gray-300 leading-relaxed flex-grow'>
              {currentProject.description}
            </p>
            <a
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-4 inline-block px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg 
                hover:bg-cyan-600 transition duration-300 text-center'
            >
              See Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;