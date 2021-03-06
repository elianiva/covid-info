import React, { useState, useEffect } from "react"
import moment from "moment"
import Card from "./Card"

function GlobalCards() {
  const [data, setData] = useState({
    cases: [],
    deaths: [],
    recovered: [],
    active: [],
    todayCases: [],
    todayDeaths: []
  })
  const [loading, setLoading] = useState(false)
  const { cases, deaths, recovered, active, todayCases, todayDeaths } = data
  const url = "https://corona.lmao.ninja/v2/all"

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <header className="header">
        {loading ? (
          <div className="header__text">Loading...</div>
        ) : (
          <>
            <div className="header__country">Global</div>
            <div className="header__text">
              Data persebaran COVID 19 di seluruh dunia
            </div>
            <div className="header__update">
              Terakhir diperbarui: {moment(data.updated).format("DD MMMM YYYY")}
            </div>
          </>
        )}
      </header>
      <div className="cards">
        {/* prettier-ignore*/}
        <Card number={cases} growth={todayCases} title="Jumlah Kasus" color="blue"/>
        {/* prettier-ignore*/}
        <Card number={deaths} growth={todayDeaths} title="Kematian" color="red"/>
        {/* prettier-ignore*/}
        <Card number={recovered} title="Sembuh" color="green"/>
        {/* prettier-ignore*/}
        <Card number={active} title="Dalam Perawatan" color="orange"/>
      </div>
    </>
  )
}

export default GlobalCards
