import React, { useContext } from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"

import "../build/Indonesia.css"
import { IndonesiaContext } from "../context/IndonesiaContext"
import Graph from "../components/Graph"

function Indonesia() {
  let { data } = useContext(IndonesiaContext)
  let { cases, deaths, recovered, active, todayCases, todayDeaths } = data
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="cards">
        {/* prettier-ignore*/}
        <Card number={cases} growth={todayCases} title="Total Kasus" color="blue"/>
        {/* prettier-ignore*/}
        <Card number={deaths} growth={todayDeaths} title="Kematian" color="red"/>
        {/* prettier-ignore*/}
        <Card number={recovered} title="Sembuh" color="green"/>
        {/* prettier-ignore*/}
        <Card number={active} title="Kasus Aktif" color="orange"/>
      </div>
      <Graph />
    </div>
  )
}

export default Indonesia
