import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Country from "./pages/Country"
import Global from "./pages/Global"
import Search from "./pages/Search"
import { NavProvider } from "./context/NavContext"

function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/indonesia" />
          </Route>
          <Route path="/global">
            <Global />
          </Route>
          <Route path="/cari">
            <Search />
          </Route>
          <Route path="/:country">
            <Country />
          </Route>
        </Switch>
      </BrowserRouter>
    </NavProvider>
  )
}

export default App
