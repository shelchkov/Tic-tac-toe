export interface IconProps {
  width?: number
  height?: number
  fill?: string
}

export enum ElementOfField {
  CROSS = "CROSS",
  NOUGHT = "NOUGHT",
}

export interface FieldElement {
  row: number
  column: number
  type: ElementOfField
}
