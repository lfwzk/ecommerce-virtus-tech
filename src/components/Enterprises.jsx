import React from 'react'
import logo1 from "../assets/logos/epson.png";
import logo2 from "../assets/logos/samsung.png";
import logo3 from "../assets/logos/nvidia.png";
import logo4 from "../assets/logos/predator.png";
import logo5 from "../assets/logos/hp.png";
import logo6 from "../assets/logos/republic.png";
import logo7 from "../assets/logos/amd.png";
import logo8 from "../assets/logos/apple.png";
import logo9 from "../assets/logos/intel.png";
import logo10 from "../assets/logos/asrock.png";
import logo11 from "../assets/logos/lenovo.png";
import logo12 from "../assets/logos/msi.png";



export const Enterprises = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
		<h2 className="text-5xl text-neon-pink font-bold">Nuestras Marcas </h2>
		<div className="flex flex-wrap justify-center lg:justify-between  ">
		    <img src={logo1} alt="logo" />
			<img src={logo2} alt="logo" />
			<img src={logo3} alt="logo" />
			<img src={logo4} alt="logo" />
			<img src={logo5} alt="logo" />
			<img src={logo6} alt="logo" />
			<img src={logo7} alt="logo" />
			<img src={logo8} alt="logo" />
			<img src={logo9} alt="logo" />
			<img src={logo10} alt="logo" />
			<img src={logo11} alt="logo" />
			<img src={logo12} alt="logo" />

			
			
		</div>
	</div>
</section>
  )
}
