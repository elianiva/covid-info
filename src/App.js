import React from "react"
import { IndonesiaProvider } from "./context/IndonesiaContext"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Indonesia from "./pages/Indonesia"

function App() {
  return (
    <IndonesiaProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Indonesia />
          </Route>
        </Switch>
      </BrowserRouter>
    </IndonesiaProvider>
  )
}

export default App
