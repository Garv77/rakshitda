import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MobileNav from './components/MobileNav'
import FramerMotion from './components/framer'
import Footer from './components/footer'

import Home from './components/Home'
import OfficeSupplies from './components/DailyUse'
import Essentials from './components/Essentials';
import ProductDetail from './components/ProductDetails';
import ClothingCollection from './components/Clothing';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <MobileNav />
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/office-supplies" element={<OfficeSupplies />} />
          <Route path="/essentials" element={<Essentials/>}  />
          <Route path="/clothing" element={<ClothingCollection/>}  />
           <Route path="/product/:id" element={<ProductDetail />} />
          {/* Add more routes here if needed */}
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
