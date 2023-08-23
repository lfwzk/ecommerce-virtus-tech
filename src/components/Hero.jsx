import React from 'react';
import img from '../assets/portada.png'


const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{ backgroundImage:  ` url(${img})`,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
    }}
    >
    </div>
  );
};

export default Hero;
