import React, { ImgHTMLAttributes, DetailedHTMLProps } from 'react'
import * as CSS from 'csstype'

export interface ImageProps {
  src?: 'random' | string&{}
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

const Image: React.FC<ImageProps & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({
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

  const randomSeed:(a:number,b:number)=>number = (a,b)=>{
    return Math.round(Math.random()*(b-a) + a)
  }

  return (
    <img
      src={src ? src === 'random' ? `https://picsum.photos/seed/${randomSeed(0,3000)}/300` : src : `https://picsum.photos/seed/${randomSeed(0,3000)}/300`}
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
