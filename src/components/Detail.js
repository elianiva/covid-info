import React, { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"

import "../build/Details.css"

function Detail() {
  // initial data from API
  const [data, setData] = useState([])

  // data for the chart
  const [chartData, setChartData] = useState({
    province: [],
    cases: [],
    deaths: [],
    recovered: [],
    selected: []
  })

  // fetch data from the API
  let url = "https://corona.coollabs.work/indonesia/provinsi"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])

  // set chartData
  useEffect(() => {
    setChartData({
      province: data.map(prov => prov.Provinsi),
      cases: data.map(kasus => kasus.Kasus_Posi),
      deaths: data.map(death => death.Kasus_Meni),
      recovered: data.map(recovered => recovered.Kasus_Semb),
      selected: data.map(selected => selected.Kasus_Posi)
    })
  }, [data])

  // sort data
  function sort(opt) {
    if (opt === "recovered") {
      setChartData({
        ...chartData,
        selected: chartData.recovered
      })
    } else if (opt === "deaths") {
      setChartData({
        ...chartData,
        selected: chartData.deaths
      })
    } else {
      setChartData({
        ...chartData,
        selected: chartData.cases
      })
    }
  }

  return (
    <div className="detail">
      <div className="detail__title">10 Provinsi dengan kasus terbanyak</div>
      <hr />
      <div className="detail__options">
        <div className="detail__option">
          <div className="detail__sort">Urutkan berdasarkan</div>
          <button className="detail__button" onClick={() => sort("cases")}>
            Kasus
          </button>
          <button className="detail__button" onClick={() => sort("deaths")}>
            Kematian
          </button>
          <button className="detail__button" onClick={() => sort("recovered")}>
            Sembuh
          </button>
        </div>
      </div>
      <div className="detail__canvas">
        <Bar
          data={{
            labels: chartData.province.slice(0, 10),
            datasets: [
              {
                data: chartData.selected
                  .slice(0, 10)
                  .sort((a, b) => (a > b ? -1 : 1)),
                backgroundColor: [
                  "rgba(64, 120, 242, .8)",
                  "rgba(235, 87, 87, .8)",
                  "rgba(88, 203, 177, .8)",
                  "rgba(247, 140, 108, .8)",
                  "rgba(64, 120, 242, .8)",
                  "rgba(235, 87, 87, .8)",
                  "rgba(88, 203, 177, .8)",
                  "rgba(247, 140, 108, .8)",
                  "rgba(64, 120, 242, .8)",
                  "rgba(235, 87, 87, .8)"
                ],
                hoverBackgroundColor: [
                  "rgba(64, 120, 242, 1)",
                  "rgba(235, 87, 87, 1)",
                  "rgba(88, 203, 177, 1)",
                  "rgba(247, 140, 108, 1)",
                  "rgba(64, 120, 242, 1)",
                  "rgba(235, 87, 87, 1)",
                  "rgba(88, 203, 177, 1)",
                  "rgba(247, 140, 108, 1)",
                  "rgba(64, 120, 242, 1)",
                  "rgba(235, 87, 87, 1)"
                ],
                hoverBorderColor: [
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)",
                  "rgba(0, 0, 0, .5)"
                ],
                borderWidth: 2,
                borderAlign: "inner"
              }
            ]
          }}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            }
          }}
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

export default Detail
