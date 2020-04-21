import React, { useState, useEffect } from "react"
import moment from "moment"
import Card from "./Card"

function Cards({ country }) {
  const [data, setData] = useState({
    country: "",
    countryInfo: {
      flag: ""
    },
    cases: [],
    deaths: [],
    recovered: [],
    active: [],
    todayCases: [],
    todayDeaths: []
  })
  const [loading, setLoading] = useState(false)
  const { cases, deaths, recovered, active, todayCases, todayDeaths } = data

  let url = `https://corona.lmao.ninja/v2/countries/${country}`

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
  }, [country])
  return (
    <>
      <header className="header">
        {loading ? (
          <>
            <div className="header__country">Loading..</div>
          </>
        ) : (
          <>
            <div className="header__country">
              <img
                src={data.countryInfo.flag}
                alt="flag"
                className="header__flag"
              />
              {data.country}
            </div>
            <div className="header__text">
              Data persebaran COVID 19 di{" "}
              <span style={{ textTransform: "capitalize" }}>{country}</span>
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

export default Cards
