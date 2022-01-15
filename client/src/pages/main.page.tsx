import React from "react"
import { Link } from "react-router-dom"
import { routes } from "../utils/routing"

export const MainPage = () => {
  return (
    <div>
      Main
      <Link to={routes.GAME}>Start game</Link>
    </div>
  )
}
