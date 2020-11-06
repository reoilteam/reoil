import React, { ImgHTMLAttributes } from 'react'
import Box, {BoxComponentProps, BoxProps} from './Box'
import Image, {ImageProps} from './Image'

export interface AvatarProps extends BoxComponentProps {
  /**Image source url path */
  src?: 'random' | (string&{})
  /**Generate random pictures from https://picsum.photos/ for quick demonstration*/
  random?: boolean
}

const Avatar: React.FC<AvatarProps> = ({src='random', children, random,  ...props}) => {

  return(
    <Box center={children?true:false} {...props}>
      {children || <Image src={src} />}
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
