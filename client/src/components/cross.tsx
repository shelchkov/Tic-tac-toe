import React from "react"
import { CrossIcon } from "../resources/cross.icon"
import { sizes } from "../utils/constants"
import { theme } from "../utils/theme"

export const Cross = () => (
  <CrossIcon
    width={sizes.crossSize}
    height={sizes.crossSize}
    fill={theme.colors.main}
  />
)
