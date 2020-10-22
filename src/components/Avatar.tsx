import React, { ImgHTMLAttributes } from 'react'
import Box, {BoxProps} from './Box'
import Image, {ImageProps} from './Image'

export interface AvatarProps extends BoxProps {
  src?: 'random' | string&{}
  /**Generate random pictures from https://picsum.photos/ for quick demonstration.*/
  random?: boolean
}

const Avatar: React.FC<AvatarProps> = ({src, children, random, ...props}) => {


  return(
    <Box {...props} center={children?true:false}>
      {src ? <Image src={src} /> : children}
    </Box>
  )
}

Avatar.defaultProps = {
  borderRadius: '50%',
  cover: true,
  size: 34,
  backgroundColor: 'whitesmoke'
}

export default Avatar
