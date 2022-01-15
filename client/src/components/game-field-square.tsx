import React, { ReactNode } from "react"
import styled from "styled-components"
import { sizes } from "../utils/constants"

interface Props {
  children?: ReactNode
}

const Square = styled.div`
  width: ${sizes.crossSize + 2 * sizes.squarePadding}px;
  height: ${sizes.crossSize + 2 * sizes.squarePadding}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`

export const GameFieldSquare = ({ children }: Props) => (
  <Square>{children}</Square>
)
