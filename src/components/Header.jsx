import React, { useState } from 'react';
import img from '../../public/icon.ico';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black  backdrop-blur-lg ">
      {/* Anuncio de oferta */}
      <div className="bg-neon-green text-black p-2 text-center">
       💳¡Oferta Especial! 20% de descuento en laptops. ¡Compra ahora!💳
      </div>
      {/* Navegación */}
      <nav className="bg-black bg-opacity-70 backdrop-blur-lg container mx-auto py-4 flex items-center justify-between ">
        <div className="flex items-center ">
          <div className="mr-8 ">
            {/* Logo */}
            <img src={img} alt="Logo" className="w-12 h-12 rounded-md" />
          </div>
        </div>
        {/* Menú Hamburguesa para la versión móvil */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Navegación en la versión de escritorio */}
        <div className="hidden md:flex items-center space-x-6 ">
          <a href="#" className="text-white hover:text-gray-300">Categorías</a>
          <a href="#" className="text-white hover:text-gray-300">Soporte Técnico</a>
          
          <a href="#" className="text-white hover:text-gray-300">Contacto</a>
          <a href="#" className="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
          </a>
        </div>
      </nav>
      {/* Menú desplegable para la versión móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-75 absolute w-full top-0 left-0 py-4 px-2">
          <a href="#" className="block text-white mb-2 hover:text-gray-300">Categorías</

a>
          <a href="#" className="block text-white mb-2 hover:text-gray-300">Servicio Técnico</a>
          <a href="#" className="block text-white mb-2 hover:text-gray-300">Info</a>
          <a href="#" className="block text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
            </svg>
            Iniciar Sesión
          </a>
          <a href="#" className="block text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
            Carrito de Compras
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
