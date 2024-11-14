import { Home, StarOfMemory, About, Contact, MobileNavigation } from "pages/index"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/starofmemory" element={<StarOfMemory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mobilenavigation" element={<MobileNavigation />} />
      </Routes>
    </BrowserRouter>
  )
}
