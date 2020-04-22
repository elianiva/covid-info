import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "../build/Navbar.css"
import { NavContext } from "../context/NavContext"

function Navbar({ url }) {
  const { visible, setVisible } = useContext(NavContext)

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__title">COVID-19</div>
        <div className="navbar__items">
          <Link
            to="/"
            className={`navbar__item ${
              url === "indonesia" && "navbar__item--active"
            }`}
          >
            Indonesia
          </Link>
          <Link
            to="/global"
            className={`navbar__item ${
              url === "global" && "navbar__item--active"
            }`}
          >
            Global
          </Link>
          <Link
            to="/app/tentang"
            className={`navbar__item ${
              url === "tentang" && "navbar__item--active"
            }`}
          >
            Tentang
          </Link>
        </div>
        <button className="navbar__button">
          <input
            type="checkbox"
            className="navbar__fakeInput"
            onClick={() => setVisible(!visible)}
          />
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
