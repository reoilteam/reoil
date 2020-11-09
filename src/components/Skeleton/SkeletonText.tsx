import { BorderRadiusProperty } from 'csstype'
import React from 'react'

export interface SkeletonTextProps {
  borderRadius?: BorderRadiusProperty<string | number>
  divides?: number[]
  gap?: number
  color?: 'dark' | 'light' | (string&{})
}

const SkeletonText: React.FC<SkeletonTextProps> = ({
  borderRadius = 2,
  divides=[1,3],
  gap=10,
  color='dark'
}) => {

  const computedBgColor: string = color==='dark' ? 'rgba(0,0,0,.1)' : color==='light' ? 'rgba(255,255,255,.2)' : color

  const computedWidth = (value: number, gap: number): string=>{
    const summary = divides.reduce((prev,cur)=>prev+cur,0)
    const gapSum = (divides.length-1) * gap
    const perMinus = gapSum / divides.length
    return `calc(${value/summary*100 + '%'} - ${perMinus}px)`
  }

  return (
    <div
      style={{
        display: 'block'
      }}>
      {divides.map((item, i)=>(
        <span
          key={i}
          style={{
            display: 'inline-flex',
            lineHeight: 1,
            background: computedBgColor,
            width: computedWidth(item, gap),
            marginLeft: i && gap, // default 10
            borderRadius,
          }}>
          &zwnj;
        </span>
      ))}
    </div>
  )
}

export default SkeletonText
