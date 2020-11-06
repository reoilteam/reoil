import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Box } from 'reoil'

const LineClampDemo: React.FC<RouteComponentProps> = () => {
  return(
    <Box lineClamp={1}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi quia expedita voluptates ipsa ad, corrupti accusamus odio cumque necessitatibus quod, minus dolorum tenetur error accusantium rem odit maxime nostrum.
    </Box>
  )
}

export default LineClampDemo
