import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Box } from 'reoil'

const SkeletonDemo: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <Box bg='gray'>
        &zwnj;
      </Box>
      <Box color='red' fontWeight='bold' lineHeight={1.5}>hello</Box>
    </>
  )
}

export default SkeletonDemo
