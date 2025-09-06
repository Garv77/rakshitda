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
import Manpower from './components/manpower';
import ComingSoon from './components/ration';
import AboutUs from './components/about';
import PrivacyPolicy from './components/privacy';
import WhatsappButton from "./components/whatsappbutton";



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
           <Route path = "/manpower" element = {<Manpower/>} />
           <Route path = "/ration" element = {<ComingSoon/>} />
           <Route path = "/aboutus" element = {<AboutUs/>} />
           <Route path ="/privacypolicy" element = {<PrivacyPolicy/>} />
          {/* Add more routes here if needed */}
        </Routes>

        <Footer />
        <WhatsappButton/>
      </Router>
    </>
  )
}

export default App
