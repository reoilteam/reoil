import { RouteComponentProps } from '@reach/router'
import React, { useEffect, useState } from 'react'
import { Copy, Avatar } from 'reoil'

const CopyDemo: React.FC<RouteComponentProps> = () => {
  const [text, setText] = useState('hello')

  useEffect(()=>{
    setTimeout(()=>{
      setText('done')
    }, 2000)
  }, [])

  return(
    <Copy onCopyTriggered={(string)=>{
      console.log( string )
    }}>
      hello world haha
    </Copy>
  )
}

export default CopyDemo
