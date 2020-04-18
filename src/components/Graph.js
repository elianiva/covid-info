import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import "../build/Graph.css"

function Graph() {
  // initial data from API
  let [data, setData] = useState({
    timeline: {
      cases: [],
      deaths: [],
      recovered: [],
    },
  })

  // data for the graph
  let [graphData, setGraphData] = useState({
    casesDate: [],
    casesTotal: [],
    deathsTotal: [],
    recoveredTotal: [],
  })

  // fetch data from the API
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/historical/indonesia")
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(err => console.log(err))
  }, [])

  // return array of data whenever the data from the API changes
  useEffect(() => {
    setGraphData({
      casesDate: Object.keys(data.timeline.cases),
      casesTotal: Object.values(data.timeline.cases),
      deathsTotal: Object.values(data.timeline.deaths),
      recoveredTotal: Object.values(data.timeline.recovered),
    })
  }, [data])

  return (
    <div className="graph">
      <div className="graph__title">Grafik perkembangan</div>
      <hr />
      <div className="graph__canvas">
        <Line
          data={{
            labels: graphData.casesDate,
            datasets: [
              {
                label: "Jumlah Kasus",
                data: graphData.casesTotal,
                backgroundColor: graphData.casesTotal.map(() => [
                  "rgba(64, 120, 242, 1)",
                ]),
                borderColor: graphData.casesTotal.map(() => [
                  "rgba(64, 120, 242, 1)",
                ]),
                borderWidth: 1,
                fill: false,
              },
              {
                label: "Jumlah Kematian",
                data: graphData.deathsTotal,
                backgroundColor: graphData.deathsTotal.map(() => [
                  "rgba(235, 87, 87, 1)",
                ]),
                borderColor: graphData.deathsTotal.map(() => [
                  "rgba(235, 87, 87, 1)",
                ]),
                borderWidth: 1,
                fill: false,
              },
              {
                label: "Jumlah Pulih",
                data: graphData.recoveredTotal,
                backgroundColor: graphData.recoveredTotal.map(() => [
                  "rgba(88, 203, 177, 1)",
                ]),
                borderColor: graphData.recoveredTotal.map(() => [
                  "rgba(88, 203, 177, 1)",
                ]),
                borderWidth: 1,
                fill: false,
              },
            ],
          }}
          width={400}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  )
}

export default Graph
