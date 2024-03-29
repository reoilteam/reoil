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
  color,
  BackgroundProps,
  background,
  border,
  BorderProps,
  TypographyProps,
  typography,
  ShadowProps,
  shadow,
  ColorStyleProps
} from 'styled-system'
import { getComputedJustifyContent, getComputedAlignItems } from '../utils/flex'
import * as CSS from 'csstype'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Inspect from './Inspect'

/**Box main props offered */
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
  width?: CSS.WidthProperty<number>
  fullWidth?: boolean
  inspect?: boolean
  alignX?: CSS.JustifyContentProperty | CSS.AlignItemsProperty
  alignY?: CSS.JustifyContentProperty | CSS.AlignItemsProperty
  stretch?: boolean
  boxSizing?: CSS.BoxSizingProperty
  borderBox?: boolean
  contentBox?: boolean
  userSelect?: CSS.UserSelectProperty
  pointerEvents?: CSS.PointerEventsProperty
  lineClamp?: number
}

/**Detailed Box component props */
export type BoxComponentProps = BoxProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

/**Box component */
const Box: React.FC<BoxComponentProps> = React.forwardRef<HTMLDivElement, BoxComponentProps>(({
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
  width,
  fullWidth,
  inspect,
  alignX,
  alignY,
  stretch,
  boxSizing,
  borderBox,
  contentBox,
  userSelect,
  pointerEvents,
  lineClamp,
  ...props
}, ref) => {
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
    alignY,
    stretch
  })
  const alignItems = getComputedAlignItems({
    childrenPosition,
    flexDirection,
    alignX,
    alignY,
    stretch
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

  const lineClampCSS = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineClamp};
    overflow: hidden;
  `

  return (
    <StyledBox
      color={color}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={{
        cursor,
        textTransform,
        transition: transitionStyle,
        position,
        left: typeof left !== 'boolean' ? left : undefined,
        right: typeof right !== 'boolean' ? right : undefined,
        top: typeof top !== 'boolean' ? top : undefined,
        bottom: typeof bottom !== 'boolean' ? bottom : undefined,
        width: fullWidth ? '100%' : width,
        boxSizing: borderBox&&'border-box' || contentBox&&'content-box' || boxSizing,
        userSelect,
        pointerEvents,
        ...style,
      }}
      css={css`
        ${cover || fit || objectFit ? objectFitCSS : null};
        ${cover || fit || (objectFit && props.borderRadius) ? `overflow: hidden` : null}; position: relative;
        ${lineClamp && lineClampCSS};
      `}
      ref={ref}
      {...props}>

      {inspect && <Inspect />}
      {props.children}

    </StyledBox>
  )
})

Box.defaultProps = {
  display: 'flex'
}

// Props definition for Box
type StyledBoxType = SpaceProps &
  LayoutProps &
  FlexProps &
  FlexboxProps &
  ColorStyleProps &
  BackgroundProps &
  ShadowProps &
  BorderProps &
  TypographyProps

// Use styled-theme to decorate Box
const StyledBox = styled.div<StyledBoxType | ColorProps>`
  ${color}
  ${layout}
  ${space}
  ${flex}
  ${flexbox}
  ${colorStyle}
  ${background}
  ${shadow}
  ${border}
  ${typography}
`

export default Box
