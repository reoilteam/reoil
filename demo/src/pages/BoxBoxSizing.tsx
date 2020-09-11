import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Box } from 'reoil'

const BoxBoxSizing: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <Box size={100} background='tomato' center color='white' padding={20}>
        Without borderBox prop
      </Box>
      <Box size={100}></Box>
      <Box size={100} background='tomato' center color='white' padding={20} borderBox>
        With borderBox prop
      </Box>
      <Box size={100}></Box>
      <Box size={100} background='tomato' center color='white' padding={20} boxSizing='border-box'>
        Also can provide boxSizing
      </Box>
    </>
  )
}

export default BoxBoxSizing
