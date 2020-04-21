import React, { createContext, useState } from "react"

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const [visible, setVisible] = useState(false)
  return (
    <NavContext.Provider value={{ visible, setVisible }}>
      {children}
    </NavContext.Provider>
  )
}
