import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiClipboardCheck, HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Reservation from './pages/Reservation'

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Cinema On-Demand</p>
      </header>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Now Playing
        </NavLink>
        <NavLink to="/reservation" className="iconWrapper">
            <HiClipboardCheck className='icon' />
            Reservation
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          About Us
          </NavLink>
          
      </footer>
    </BrowserRouter>
  )
}

export default App
