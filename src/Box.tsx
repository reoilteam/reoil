import React from 'react'
import styled from '@emotion/styled'
import {
  color,
  space,
  layout,
  ColorProps,
  SpaceProps,
  LayoutProps,
  flex,
  FlexProps,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  fontWeight,
  fontStyle,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps
} from 'styled-system'

const Box: React.FC = () => {
  return <StyledBox>
    Box
  </StyledBox>
}

type StyledBoxType =
  | ColorProps
  | SpaceProps
  | LayoutProps
  | FlexProps
  | FlexboxProps
  | FontSizeProps
  | FontFamilyProps
  | FontWeightProps
  | FontStyleProps
const StyledBox = styled.div<StyledBoxType>`
  ${layout}
  ${color}
  ${space}
  ${flex}
  ${flexbox}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${fontStyle}
`

export default Box
