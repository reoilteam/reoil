import React, { CSSProperties, HTMLAttributes, ImgHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { SizeProps, size, width, WidthProps, HeightProps } from 'styled-system'
import * as CSS from 'csstype'

export interface ImageProps {
  src: string
  objectFit?: CSS.ObjectFitProperty
  fit?: CSS.ObjectFitProperty,
  cover?: boolean,
  width?: CSS.WidthProperty<number>
  height?: CSS.HeightProperty<number>
  minWidth?: CSS.MinWidthProperty<number>
  minHeight?: CSS.MinHeightProperty<number>
  maxWidth?: CSS.MaxWidthProperty<number>
  maxHeight?: CSS.MaxHeightProperty<number>
  display?: 'inline' | 'block' | 'inline-block' | 'none' | 'unset' | 'initial'
  borderRadius?: CSS.BorderRadiusProperty<number>
}

const Image: React.FC<ImageProps & ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  objectFit,
  fit,
  cover,
  height,
  width,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  display,
  borderRadius,
  ...props
}) => {
  const objectFitStyle = ():any => {
    if(cover) return 'cover'
    if(fit || objectFit) return fit || objectFit
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{
        objectFit: objectFitStyle(),
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        display,
        borderRadius
      }}
      {...props}
    />
  )
}

// const StyledImage = styled.img`

// `

export default Image
