import React from 'react'
import { Image } from 'reoil'
import { RouteComponentProps } from '@reach/router'
import { Box } from 'reoil'

const ImgPage: React.FC<RouteComponentProps> = () => {
  return(
    <Box>
      <Box inspect row>
        <Box inspect>
          <Image src='random' />
        </Box>
        <Image src='random' />
        <Image src='random' />
        <Image src='random' />
      </Box>
      <Box inspect>
        <Image src='random' />
      </Box>
      <Box inspect>
        <Image src='random' />
      </Box>
      <Box inspect>
        <Image src='random' />
      </Box>
    </Box>
  )
}

export default ImgPage
