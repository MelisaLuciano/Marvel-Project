import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Footer from "./components/Footer"
import HeroDetails from "./routes/HeroDetails"
import Home from "./routes/Home"
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/:id" element={<HeroDetails />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
