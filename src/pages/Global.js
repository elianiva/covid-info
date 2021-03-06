import React, { useContext, useEffect } from "react"
import { NavContext } from "../context/NavContext"
import Navbar from "../components/Navbar"
import MobileNav from "../components/MobileNav"
import GlobalCards from "../components/GlobalCards"
import GlobalGraph from "../components/GlobalGraph"
import GlobalDetail from "../components/GlobalDetail"
import Footer from "../components/Footer"

import "../build/Indonesia.css"

function Global() {
  const { visible, setVisible } = useContext(NavContext)

  useEffect(() => {
    setVisible(false)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <Navbar url="global" />
        <MobileNav
          visibility={visible ? "visible" : "hidden"}
          opacity={visible ? 1 : 0}
        />
        <GlobalCards />
        <GlobalGraph />
        <GlobalDetail />
      </div>
      <Footer />
    </div>
  )
}

export default Global
