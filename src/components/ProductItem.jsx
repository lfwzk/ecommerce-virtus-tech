import React from "react";
import img1 from "../assets/images/gamers.png";
import img2 from "../assets/images/gamamedia.png";
import img3 from "../assets/images/nointegradas.png";

export const ProductItem = () => {
  return (
<>
<section className="py-6 dark:bg-gray-800 dark:text-gray-100">


<h2 className=" text-5xl text-neon-pink text-center text-bold font-bold">Computadoras de escritorio</h2>
	<div className="container p-4 mx-auto sm:p-10">
 
		<div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-5xl text-neon-pink">Gamers</h2>
    <p>Potencia y rendimiento excepcional para tus juegos favoritos. Adquiere la computadora gamer de tus sueños y sumérgete en una experiencia gaming inigualable.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" > <a href="/gamer">Cotiza Ahora ..</a></button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-5xl text-neon-pink">Gama Media</h2>
    <p>Eleva tu productividad a un nivel superior con nuestra computadora profesional. Potencia, fiabilidad y rendimiento excepcional para enfrentar cualquier desafío laboral.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Cotiza Ahora ..</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img3 }alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-5xl text-neon-pink">Gama Basica </h2>
    <p>La solución para tus tareas cotidianas. Nuestra computadora básica, perfecta para navegar en internet, manejar documentos y disfrutar de contenidos sin complicaciones.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Cotiza Ahora ..</button>
    </div>
  </div>
</div>
		</div>
	</div>
</section>

</>
  );
};

