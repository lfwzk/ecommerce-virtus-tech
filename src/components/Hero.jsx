import React from 'react';
import img from '../assets/portada.png'


const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{ backgroundImage:  `linear-gradient(90deg, rgba(93,85,218,0.5452556022408963) 61%, rgba(78,72,214,0.16710434173669464) 99%), url(${img})`,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
    }}
    >
      <div className="container mx-auto text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Virtus technology</h1>
        <p className="text-lg mb-8">Explora nuestra amplia selección de productos y encuentra la computadora perfecta para ti.</p>
        <div className="max-w-md mx-auto">
          <form className="flex items-center">
            <input
              type="text"
              className="w-full rounded-l-lg focus:shadow-outline px-4 py-2 rounded-md backdrop-blur-md focus:outline-none"
              placeholder="Buscar productos..."
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md backdrop-blur-md focus:outline-none"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
