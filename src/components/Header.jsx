import React, { useState } from 'react';
import img from '../../public/icon.ico';


const Navbar = () => {
  
  return (
    <div className="navbar bg-black ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Soporte</a></li>
          <li>
            <a>Categorias</a>
            <ul className="p-2">
              <li><a>Computadoras</a></li>
              <li><a>Laptop</a></li>
              <li><a>Accesorios</a></li>
              <li><a>Productos nuevos  </a></li>
            </ul>
          </li>
          <li><a>Contacto</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl" href='/'>Virtus Technology</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
          <details>
            <summary>Categorias </summary>
            <ul className="p-2">
              <li><a>Computadoras</a></li>
              <li><a>Laptop</a></li>
              <li><a>Accesorios</a></li>
            </ul>
          </details>
        </li>
        <li><a>Soporte</a></li>
        
        <li><a>Contacto </a></li>
        <li><a>Productos nuevos  </a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <button src="/login">
      <a className="btn" >
       
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      
      </a>
      </button>
    </div>
  </div>
  );
};

export default Navbar;
