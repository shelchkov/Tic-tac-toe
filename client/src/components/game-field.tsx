import React from "react"
import styled from "styled-components"
import { fillArray, getFieldElement } from "../utils"
import { fieldSize } from "../utils/constants"
import { FieldElement } from "../utils/types"
import { GameFieldElement } from "./game-field-element"
import { GameFieldSquare } from "./game-field-square"

interface Props {
  field: FieldElement[]
}

const rows = fillArray(fieldSize.rowsNumber)
const columns = fillArray(fieldSize.columnsNumber)

const Container = styled.div`
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`

const Row = styled.div`
  display: flex;
`

export const GameField = ({ field }: Props) => (
  <Container>
    {rows.map((row) => (
      <Row key={row}>
        {columns.map((column) => (
          <GameFieldSquare key={`${row}-${column}`}>
            <GameFieldElement
              type={getFieldElement(field, row, column)?.type}
            />
          </GameFieldSquare>
        ))}
      </Row>
    ))}
  </Container>
)
