import React from "react"
import "../build/Card.css"

import up from "../assets/icon-up.svg"

function Card({ number, title, color, growth, bg }) {
  return (
    <div className="card" data-color={color}>
      <div className="card__title">{title}</div>
      <div className="card__number">
        {number}
        {growth > 0 && (
          <div className="card__growth">
            <img src={up} alt="icon-up" />
            {growth}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
