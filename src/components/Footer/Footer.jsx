import React from 'react'
import { RiGithubFill, RiLinkedinFill, RiMailFill } from '@remixicon/react'

const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-20 py-8 border-t-2 border-cyan-400/30 
      shadow-[0_-5px_15px_rgba(34,211,238,0.1)] bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-6 mb-4 md:mb-0">
          {/* GitHub Link */}
          <a href="https://github.com/Trippy-69" target="_blank" rel="noopener noreferrer" 
            className="text-gray-300 hover:text-cyan-400 transition-all">
            <RiGithubFill size={24} />
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/preetkumargupta" target="_blank" rel="noopener noreferrer" 
            className="text-gray-300 hover:text-cyan-400 transition-all">
            <RiLinkedinFill size={24} />
          </a>

          {/* Mail Link */}
          <a href="mailto:preetgupta2002@outlook.com?subject=Contacting%20through%20your%20website&body=Hi%20Preet," 
            className="text-gray-300 hover:text-cyan-400 transition-all">
            <RiMailFill size={24} />
          </a>
        </div>
        
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Preet. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
