
import { Routes, Route } from "react-router-dom"
import { Landing } from "./components/Landing"
import { Gamer } from "./pages/Gamer"


function App() {
 

  return (
    <>
   <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/Gamer" element={<Gamer/>} />

      
      </Routes>

  

        
    </>
  )
}

export default App
