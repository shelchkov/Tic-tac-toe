import React from "react"
import styled from "styled-components"
import { NoughtIcon } from "../resources/nought.icon"
import { sizes } from "../utils/constants"
import { theme } from "../utils/theme"

const Container = styled.div`
  margin: ${(sizes.crossSize - sizes.noughtSize) / 2}px;
`

export const Nought = () => (
  <Container>
    <NoughtIcon
      width={sizes.noughtSize}
      height={sizes.noughtSize}
      fill={theme.colors.main}
    />
  </Container>
)
