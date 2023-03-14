import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import { App } from "./app"
import { theme } from "./utils/theme"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
