import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "../build/Navbar.css"
import { NavContext } from "../context/NavContext"

import { ReactComponent as Search } from "../assets/icon-search.svg"

function Navbar({ url }) {
  const { visible, setVisible } = useContext(NavContext)

  const [query, setQuery] = useState("")

  const onChange = ({ target }) => {
    setQuery(target.value)
  }

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
          <Link to="tentang" className="navbar__item">
            Tentang
          </Link>
          <div className="navbar__item navbar__searchForm">
            <input
              type="text"
              placeholder="Masukkan nama negara..."
              value={query}
              onChange={onChange}
            />
            <div className="navbar__search">
              <Link to={`/${query.toLowerCase()}`}>
                <Search className="navbar__icon" />
              </Link>
            </div>
          </div>
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
