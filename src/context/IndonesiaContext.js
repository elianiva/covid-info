import React, { createContext, useState } from "react"

export const IndonesiaContext = createContext()

export const IndonesiaProvider = props => {
  let [data, setData] = useState({
    country: "",
    countryInfo: {
      flag: "",
    },
  })
  let [loading, setLoading] = useState(false)

  return (
    <IndonesiaContext.Provider value={{ data, setData, loading, setLoading }}>
      {props.children}
    </IndonesiaContext.Provider>
  )
}
