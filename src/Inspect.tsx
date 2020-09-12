import React, { useRef, useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Inspect: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [info, setInfo] = useState({
    width: 0,
    height: 0
  })

  const updateInfo = ()=>{
    setInfo({
      ...info,
      width: ref.current!.offsetWidth,
      height: ref.current!.offsetHeight
    })
  }

  useEffect(()=>{
    const ro = new ResizeObserver(entries=>updateInfo())
    ref.current && ro.observe(ref.current)
    return ()=>ro.disconnect()
  }, [ref])

  return(
    <div className='inspect' style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      boxShadow: '0 0 0 1px rgba(255, 0, 255, 0.6)',
      background: 'rgba(255, 0, 255, 0.08)',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'transparent',
      textShadow: '0 2px 5px rgba(0,0,0,.4)',
      fontSize: 12,
      transition: '.4s',
      zIndex: 9999
    }} ref={ref} css={css`
      &:hover {
        background: rgba(255, 105, 180, .6) !important;
        color: white !important;
        backdrop-filter: blur(4px);
      }
    `}>
      {info.width} x {info.height}
    </div>
  )
}

export default Inspect
