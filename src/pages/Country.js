import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { NavContext } from "../context/NavContext"
import Navbar from "../components/Navbar"
import MobileNav from "../components/MobileNav"
import Cards from "../components/Cards"
import Graph from "../components/Graph"
import Detail from "../components/Detail"

import "../build/Cards.css"

function Country() {
  let { country } = useParams()
  const { visible, setVisible } = useContext(NavContext)

  useEffect(() => {
    setVisible(false)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Navbar url={country} />
      <MobileNav
        visibility={visible ? "visible" : "hidden"}
        opacity={visible ? 1 : 0}
      />
      <Cards country={country} />
      <Graph country={country} />
      <Detail />
    </div>
  )
}

export default Country
