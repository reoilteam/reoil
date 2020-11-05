import React, { useLayoutEffect } from 'react'

export interface MetaProps {
  title: string
  favicon: string
}

const Meta: React.FC<MetaProps> = ({
  title,
  favicon
}) => {
  useLayoutEffect(()=>{
    document.title = title
    document.querySelector('link[rel=icon]')!.setAttribute('href', favicon)
  }, [])

  return(<></>)
}

export default Meta
