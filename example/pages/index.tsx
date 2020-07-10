import React from 'react'
import { Box, Solid } from 'reoil'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Home: React.FC = () => {
  return (
    <Box row>
      <Box
        paddingY={10}
        paddingX={[10, 14, 18, 24]}
        bg='royalblue'
        color='white'
        borderRadius={4}
        textTransform='uppercase'>
        Button
      </Box>
      <Box
        ml={2}
        paddingY={10}
        paddingX={[10, 14, 18, 24]}
        bg='mediumslateblue'
        color='white'
        borderRadius={4}
        pointer>
        Button
      </Box>
      <Box fit='cover' size={30}>
        <img src="https://picsum.photos/500" alt=""/>
      </Box>
      <Solid>Solid</Solid>
    </Box>
  )
}

export default Home
