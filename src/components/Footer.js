import React from "react"
import "../build/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__text">
        Made by{" "}
        <a href="https://github.com/irrellia/" className="footer__link">
          Irrelia
        </a>{" "}
        with <span className="footer__heart">&hearts;</span>
      </span>
    </footer>
  )
}

export default Footer
