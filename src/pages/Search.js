import React, { useContext } from "react"
import { NavContext } from "../context/NavContext"
import Navbar from "../components/Navbar"
import MobileNav from "../components/MobileNav"

import "../build/Cards.css"

function Country() {
  const { visible } = useContext(NavContext)

  return (
    <div className="App">
      <Navbar url="cari" />
      {visible && <MobileNav />}
    </div>
  )
}

export default Country
