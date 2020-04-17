import React, { useEffect, useContext } from "react"
import { IndonesiaContext } from "../context/IndonesiaContext"
import "../build/Header.css"

function Header() {
  let { data, setData, loading, setLoading } = useContext(IndonesiaContext)

  useEffect(() => {
    setLoading(true)
    fetch("https://corona.lmao.ninja/v2/countries/indonesia")
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])

  return (
    <header className="header">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="header__country">
            <img src={data.countryInfo.flag} alt="" className="header__flag" />
            {data.country}
          </div>
          <div className="header__text">
            Data persebaran COVID 19 di Indonesia
          </div>
          <div className="header__update">
            Terakhir diperbarui: 17 April 2020
          </div>
        </>
      )}
    </header>
  )
}

export default Header
