import React from 'react'
import Header from './Header'
import Hero from './Hero'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "../../public/icon.ico"
import Mapview from './Map'
import { Enterprises } from './Enterprises'
import { ProductItem } from './ProductItem'
import Footer from './Footer'

export const Landing = () => {
  return (
    <>
      <Header />  

        <main className='bg-virtus  text white'>

        <FloatingWhatsApp phoneNumber='77558878' accountName='VirtusTech' avatar={logo} darkMode={true} chatMessage='bienvenido en que puedo ayudarte'/>

        <Hero />
        <Enterprises />
        <ProductItem />
        <Mapview />

        </main>
        <Footer />  
    </>
  )
}
