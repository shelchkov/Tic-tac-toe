import React from "react"
import { five } from "./utils"

export const App = () => {
  const b = {
    aa: {
      a: "Hello",
    },
  }

  return (
    <div>
      {b.aa.a} World - {five}
    </div>
  )
}
