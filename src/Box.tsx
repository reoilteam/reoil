import React, { HTMLAttributes, DetailedHTMLProps } from 'react'
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
import { getComputedJustifyContent, getComputedAlignItems } from './utils/flex'
import * as CSS from 'csstype'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Inspect from './Inspect'

export interface BoxProps extends StyledBoxType, ColorProps {
  center?: boolean
  left?: boolean | string | number
  right?: boolean | string | number
  top?: boolean | string | number
  bottom?: boolean | string | number
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
  position?: CSS.PositionProperty
  fullWidth?: boolean
  inspect?: boolean
  alignX?: CSS.JustifyContentProperty | CSS.AlignItemsProperty
  alignY?: CSS.JustifyContentProperty | CSS.AlignItemsProperty
}

const Box: React.FC<
  BoxProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
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
  position,
  fullWidth,
  inspect,
  alignX,
  alignY,
  ...props
}) => {
  const childrenPosition = {
    center,
    left: typeof left === 'boolean' && left ? left : undefined,
    right: typeof right === 'boolean' && right ? right : undefined,
    top: typeof top === 'boolean' && top ? top : undefined,
    bottom: typeof bottom === 'boolean' && bottom ? bottom : undefined,
    rowBetween,
    rowAround,
    rowEvenly,
    colBetween,
    colAround,
    colEvenly
  }
  const flexDirection = row ? 'row' : 'column'
  const justifyContent = getComputedJustifyContent({
    childrenPosition,
    flexDirection,
    alignX,
    alignY
  })
  const alignItems = getComputedAlignItems({
    childrenPosition,
    flexDirection,
    alignX,
    alignY
  })
  const cursor = pointer ? 'pointer' : undefined
  const transitionStyle =
    typeof transition === 'boolean'
      ? '.4s'
      : typeof transition === 'string'
      ? transition
      : undefined

  const objectFitCSS = css`
    img,
    video,
    audio {
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
      style={{
        ...style,
        cursor,
        textTransform,
        transition: transitionStyle,
        position,
        left: typeof left !== 'boolean' ? left : undefined,
        right: typeof right !== 'boolean' ? right : undefined,
        top: typeof top !== 'boolean' ? top : undefined,
        bottom: typeof bottom !== 'boolean' ? bottom : undefined,
        width: fullWidth ? '100%' : undefined
      }}
      css={css`
        ${cover || fit || objectFit ? objectFitCSS : null};
        ${cover || fit || (objectFit && props.borderRadius)
          ? `overflow: hidden`
          : null};
        position: relative;
      `}
      {...props}>
      {inspect && <Inspect />}
      {props.children}
    </StyledBox>
  )
}

Box.defaultProps = {
  display: 'flex'
}

// Props definition for Box
type StyledBoxType = SpaceProps &
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
