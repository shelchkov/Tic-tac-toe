import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GamePage } from "./pages/game.page"
import { MainPage } from "./pages/main.page"
import { routes } from "./utils/routing"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<MainPage />} />
        <Route path={routes.GAME} element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}
