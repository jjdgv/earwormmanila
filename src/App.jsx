import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/sections/NavBar'
import HomePage from './components/pages/HomePage'
import RecordsPage from './components/pages/Records/RecordsPage'
import CustomOrderPage from './components/pages/CustomOrder/CustomOrderPage'
import AboutPage from './components/pages/About/AboutPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/custom-orders" element={<CustomOrderPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
