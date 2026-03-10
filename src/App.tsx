import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Services from "./pages/Services"
import Navigation from "./components/Navigation"

function App() {
  return (
    <>
    <BrowserRouter>

      <Navigation />

        <Routes>

          <Route path="/Home" element={<Home />} />

          <Route path="/About" element={<About />} />

          <Route path="/Contacts" element={<Contacts />} />

          <Route path="/Services" element={<Services />} />

        </Routes>

    </BrowserRouter>  
    </>
  )
}

export default App