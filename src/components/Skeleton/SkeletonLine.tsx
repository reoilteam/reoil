import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export interface SkeletonLineProps {
  width?: string | number
  height?: string | number
  darkmode?: boolean
  color?: 'blackGray' | 'whiteGray' | string&{}
  marginBottom?: string | number
  borderRadius?: string | number
  divides?: number[]
  gap?: number | string
  animationSpeed?: number
  intervalSpeed?: number
}

const SkeletonLine: React.FC<SkeletonLineProps> = ({
  width,
  height=16,
  color='blackGray',
  darkmode,
  marginBottom,
  borderRadius=2,
  divides=[1,2,3],
  gap=10,
  animationSpeed=1,
}) => {
  const initMarginBottom = 6

  const computedColor = darkmode ?  'rgba(255,255,255,.2)' : 'rgba(0,0,0,.06)'

  return(
    <div style={{
      display: 'flex',
      width,
      marginBottom: marginBottom || initMarginBottom
    }} css={css`
      ${!marginBottom && `
        &:last-child {
          margin-bottom: 0 !important;
        }
      `}
    `}>

      {divides?.map((flex, i) => <div key={i} style={{
        // background: computedColor,
        background: `linear-gradient( 90deg, ${computedColor} 35%, ${darkmode ? 'rgba(255,255,255, .25)' : 'rgba(0,0,0, .02)'}, ${computedColor} 65%)`,
        backgroundSize: `350% 100%`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        width: '100%',
        height,
        borderRadius,
        flex,
        marginLeft: i && gap
      }} css={css`
        animation: skeleton ${2/animationSpeed}s ease-in-out infinite;
        @keyframes skeleton{
          from {
            background-position: 100% 0;
          }
          to {
            background-position: 0% 0;
          }
        }
      `} />)}

    </div>
  )
}

export default SkeletonLine
