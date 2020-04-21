import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../build/MobileNav.css"

import { ReactComponent as Search } from "../assets/icon-search.svg"

function MobileNav({ visibility, opacity }) {
  const [query, setQuery] = useState("")

  const onChange = ({ target }) => {
    setQuery(target.value)
  }

  return (
    <div className="mobileNav" style={{ visibility, opacity }}>
      <div className="mobileNav__overlay"></div>
      <div className="mobileNav__container">
        <div className="mobileNav__items">
          <Link to="/" className="mobileNav__item">
            Indonesia
          </Link>
          <Link to="/global" className="mobileNav__item">
            Global
          </Link>
          <Link to="/tentang" className="mobileNav__item">
            Tentang
          </Link>
          <div className="mobileNav__item">
            <input
              type="text"
              className="mobileNav__input"
              placeholder="Masukkan nama negara..."
              value={query}
              onChange={onChange}
            />
          </div>
          <div className="mobileNav__item">
            <button className="mobileNav__search">
              <Link to={`/${query.toLowerCase()}`}>
                <Search className="mobileNav__icon" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
