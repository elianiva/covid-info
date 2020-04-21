import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import moment from "moment"
import "../build/Graph.css"

function GlobalGraph() {
  // initial data from API
  const [data, setData] = useState({
    cases: [],
    deaths: [],
    recovered: []
  })

  // data for the graph
  const [graphData, setGraphData] = useState({
    casesDate: [],
    casesTotal: [],
    deathsTotal: [],
    recoveredTotal: []
  })

  const url = "https://corona.lmao.ninja/v2/historical/all?lastdays=40"

  // fetch data from the API
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, [])

  // return array of data whenever the data from the API changes
  useEffect(() => {
    setGraphData({
      casesDate: Object.keys(data.cases),
      casesTotal: Object.values(data.cases),
      deathsTotal: Object.values(data.deaths),
      recoveredTotal: Object.values(data.recovered)
    })
  }, [data])

  return (
    <div className="graph">
      <div className="graph__title">Grafik perkembangan</div>
      <hr />
      <div className="graph__canvas">
        <Line
          data={{
            labels: graphData.casesDate.map(date =>
              moment(date).format("DD MMM YY")
            ),
            datasets: [
              {
                label: "Jumlah Kasus",
                data: graphData.casesTotal,
                backgroundColor: "rgba(64, 120, 242, 1)",
                hoverBackgroundColor: "rgba(64, 120, 242, 1)",
                borderColor: "rgba(64, 120, 242, 1)",
                borderWidth: 2,
                pointRadius: 0.75,
                fill: false
              },
              {
                label: "Jumlah Kematian",
                data: graphData.deathsTotal,
                backgroundColor: "rgba(235, 87, 87, 1)",
                hoverBackgroundColor: "rgba(235, 87, 87, 1)",
                borderColor: "rgba(235, 87, 87, 1)",
                borderWidth: 2,
                pointRadius: 0.75,
                fill: false
              },
              {
                label: "Jumlah Pulih",
                data: graphData.recoveredTotal,
                backgroundColor: "rgba(88, 203, 177, 1)",
                hoverBackgroundColor: "rgba(88, 203, 177, 1)",
                borderColor: "rgba(88, 203, 177, 1)",
                borderWidth: 2,
                pointRadius: 0.75,
                fill: false
              }
            ]
          }}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  )
}

export default GlobalGraph
