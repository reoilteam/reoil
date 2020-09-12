import React, { useLayoutEffect } from 'react'

export interface MediaProps {
  title: string
  favicon: string
}

const Media: React.FC<MediaProps> = ({
  title,
  favicon
}) => {
  useLayoutEffect(()=>{
    document.title = title
    document.querySelector('link[rel=icon]')!.setAttribute('href', favicon)
  }, [])

  return(<></>)
}

export default Media
