import React from "react"
import "../build/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__title">COVID-19</div>
        <div className="navbar__items">
          <div className="navbar__item navbar__item--active">Indonesia</div>
          <div className="navbar__item">Global</div>
          <div className="navbar__item">Cari Negara</div>
          <div className="navbar__item">Tentang</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
