import React from "react"
import { ElementOfField } from "../utils/types"
import { Cross } from "./cross"
import { Nought } from "./nought"

interface Props {
  type?: ElementOfField
}

export const GameFieldElement = ({ type }: Props) => {
  if (!type) {
    return null
  }

  switch (type) {
    case ElementOfField.CROSS:
      return <Cross />
    case ElementOfField.NOUGHT:
      return <Nought />
    default:
      return null
  }
}
