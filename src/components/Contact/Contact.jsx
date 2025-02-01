import React from 'react'

const Contact = () => {
  return (
    <section className="text-white px-6 md:px-20 py-16 relative" id="contact">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-xl z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center neon-text">
          Contact
        </h2>
        
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-400/20
              rounded-lg focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30
              transition-all placeholder-gray-400"
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-400/20
              rounded-lg focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30
              transition-all placeholder-gray-400"
            />
          </div>
          
          <div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-400/20
              rounded-lg focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30
              transition-all placeholder-gray-400"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-8 
            rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-[1.02]
            shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
