// src/components/Navbar.js
import React from 'react';
import img from '../../public/icon.ico';


const Header = () => {
  return (
    <nav className="bg-black bg-opacity-70 backdrop-blur-lg p-4 navbar fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          
          <img src={img} alt="logo" className="w-8 h-8 rounded-lg ml-2" />

          <div className="text-white text-xl font-bold">
            Virtus Tech
          </div>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-neon-green">Inicio</a>
          <a href="#" className="text-white hover:text-neon-green">Productos</a>
          <a href="#" className="text-white hover:text-neon-green">Carrito</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
