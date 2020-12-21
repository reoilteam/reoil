import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Box } from 'reoil'

const BoxAlign: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <Box center height={500} bg='royalblue'  color='white' p={8}>
        hello
      </Box>
    </>
  )
}

export default BoxAlign
