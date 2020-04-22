import React, { useContext } from "react"
import "../build/Card.css"

import up from "../assets/icon-up.svg"

function Card({ number, title, color, growth, bg }) {
  const formatter = num => {
    if (Math.abs(num) > 999999) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M"
    } else if (Math.abs(num) > 999) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
    } else {
      return Math.sign(num) * Math.abs(num)
    }
  }

  return (
    <div className="card" data-color={color}>
      <div className="card__title">{title}</div>
      <div className="card__number">
        {formatter(number)}
        {growth > 0 && (
          <div className="card__growth">
            <img src={up} alt="icon-up" />
            {formatter(growth)}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
