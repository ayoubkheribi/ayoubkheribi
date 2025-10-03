import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Ayoub Kheribi
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
          A passionate web developer with a focus on creating dynamic and responsive web applications. I love turning ideas into reality through code, and I'm always eager to learn new technologies and improve my skills.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300">
            View Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 transition duration-300">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
    
};