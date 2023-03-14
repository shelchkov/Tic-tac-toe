import React from "react"
import { GameField } from "../components/game-field"
import { ElementOfField, FieldElement } from "../utils/types"

const field: FieldElement[] = [
  { row: 1, column: 0, type: ElementOfField.CROSS },
  { row: 2, column: 1, type: ElementOfField.NOUGHT },
]

export const GamePage = () => {
  return (
    <div>
      Game
      <GameField field={field} />
    </div>
  )
}
