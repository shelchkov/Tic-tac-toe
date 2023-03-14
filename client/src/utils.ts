import { FieldElement } from "./utils/types"

export const fillArray = (
  length: number,
  getElement: (index: number) => number = (index) => index
) => new Array(length).fill(1).map((_, index) => getElement(index))

export const getFieldElement = (
  elements: FieldElement[],
  row: number,
  column: number
) =>
  elements.find((element) => element.row === row && element.column === column)
