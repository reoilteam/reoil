import React, { HTMLAttributes } from 'react'
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
  BorderRadiusProps,
  boxShadow,
  BoxShadowProps,
  textShadow,
  TextShadowProps,
  textAlign,
  TextAlignProps,
  border,
  BorderProps
} from 'styled-system'
import {
  getComputedJustifyContent,
  getComputedAlignItems
} from './utils/flex'
import * as CSS from 'csstype'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export interface BoxProps extends StyledBoxType, ColorProps {
  // className?: string
  // style?: CSSProperties
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
  pointer?: Boolean
  textTransform?: CSS.TextTransformProperty
  objectFit?: CSS.ObjectFitProperty
  fit?: CSS.ObjectFitProperty
  cover?: boolean
  transition?: boolean | CSS.TransitionProperty
}

const Box: React.FC<BoxProps & HTMLAttributes<HTMLDivElement>> = ({
  style,
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
  pointer,
  textTransform,
  objectFit,
  fit,
  cover,
  transition,
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
  const flexDirection = row ? 'row' : 'column'
  const justifyContent = getComputedJustifyContent(position, flexDirection)
  const alignItems = getComputedAlignItems(position, flexDirection)
  const cursor = pointer ? 'pointer' : undefined
  const transitionStyle = typeof transition === 'boolean' ? '.4s' : typeof transition === 'string' ? transition : undefined

  const objectFitCSS = css`
    img, video, audio {
      width: 100%;
      height: 100%;
      object-fit: ${cover ? 'cover' : fit || objectFit};
    }
  `

  return (
    <StyledBox
      color={color}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={{...style, cursor, textTransform, transition: transitionStyle}}
      css={css`
        ${cover || fit || objectFit ? objectFitCSS : null};
        ${cover || fit || objectFit && props.borderRadius ? `overflow: hidden` : null};
      `}
      {...props}
    />
  )
}

Box.defaultProps = {
  display: 'flex'
}

// Props definition for Box
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
  BorderRadiusProps &
  BoxShadowProps &
  TextShadowProps &
  TextAlignProps &
  BorderProps

// Use styled-theme to decorate Box
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
  ${boxShadow}
  ${textShadow}
  ${textAlign}
  ${border}
`

export default Box
