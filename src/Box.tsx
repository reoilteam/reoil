import React from 'react'
import styled from '@emotion/styled'
import {
  colorStyle,
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
  FontStyleProps,
  color,
  BackgroundProps,
  background,
  borderRadius,
  BorderRadiusProps
} from 'styled-system'
import { getComputedJustifyContent } from './utils/flex'

interface Props extends StyledBoxType {
  center?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  row?: boolean
  rowBetween?: boolean
  colBetween?: boolean
  rowAround?: boolean
  colAround?: boolean
  rowEvenly?: boolean
  colEvenly?: boolean
  color?: string
}

const Box: React.FC<Props & ColorProps> = ({
  color,
  row,
  center,
  left,
  right,
  top,
  bottom,
  rowBetween,
  rowAround,
  rowEvenly,
  colBetween,
  colAround,
  colEvenly,
  ...props
}) => {
  const position = {
    center,
    left,
    right,
    top,
    bottom,
    rowBetween,
    rowAround,
    rowEvenly,
    colBetween,
    colAround,
    colEvenly
  }
  const direction = row ? 'row' : 'column'

  const justifyContent = getComputedJustifyContent(position, direction)  

  return <StyledBox color={color} flexDirection={direction} justifyContent={justifyContent} {...props} />
}

Box.defaultProps = {
  display: 'flex'
}

type StyledBoxType =
  // & ColorProps  // Some issues within this prop
  SpaceProps &
    LayoutProps &
    FlexProps &
    FlexboxProps &
    FontSizeProps &
    FontFamilyProps &
    FontWeightProps &
    FontStyleProps &
    BackgroundProps &
    BorderRadiusProps
const StyledBox = styled.div<StyledBoxType | ColorProps>`
  ${color}
  ${layout}
  ${colorStyle}
  ${space}
  ${flex}
  ${flexbox}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${fontStyle}
  ${background}
  ${borderRadius}
`

export default Box
