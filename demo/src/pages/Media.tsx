import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Box, Meta } from 'reoil'

const MediaPage: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <Box fontSize={6} fontWeight='bolder'>
        <Meta title='Media Page' favicon='/R.ico' />
        Hello
      </Box>
    </>
  )
}

export default MediaPage
