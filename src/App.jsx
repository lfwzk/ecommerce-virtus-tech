
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

import { ProductItem } from './components/ProductItem'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
 

  return (
    <>

    <Header />  
   
      <main className='bg-virtus  text white'>

      <FloatingWhatsApp/>
      <Hero />
      <ProductItem />

      </main>
    <Footer />  

        
    </>
  )
}

export default App
