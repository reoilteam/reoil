import React, { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { SizeProps, size, width, WidthProps, HeightProps } from 'styled-system'
import * as CSS from 'csstype'

interface Props {
  style?: CSSProperties
  src: string
  alt?: string
  objectFit?: CSS.ObjectFitProperty
  fit?: boolean // Defaults to 'object-fit: cover'
  width?: CSS.WidthProperty<number>
  height?: CSS.HeightProperty<number>
  minWidth?: CSS.MinWidthProperty<number>
  minHeight?: CSS.MinHeightProperty<number>
  maxWidth?: CSS.MaxWidthProperty<number>
  maxHeight?: CSS.MaxHeightProperty<number>
  display?: 'inline' | 'block' | 'inline-block' | 'none' | 'unset' | 'initial'
  borderRadius?: CSS.BorderRadiusProperty<number>
}

const Image: React.FC<Props> = ({
  src,
  alt,
  objectFit,
  fit,
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
  return (
    <img
      src={src}
      alt={alt}
      style={{
        objectFit: fit && !objectFit ? 'cover' : objectFit,
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
