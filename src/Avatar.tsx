import React, { ImgHTMLAttributes } from 'react'
import Box from './Box'
import styled from '@emotion/styled'

interface Props {
  src?: string
  alt?: string
}

const src:Props = {
  src: 'dasd'
}

const Avatar: React.FC = ({...props}) => {
  return(
    <Box>
      <img src="" alt=""/>
    </Box>
  )
}

export default Avatar
