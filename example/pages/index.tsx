import React from 'react'
import { Box } from 'reoil'

const Home: React.FC = () => {
  return (
    <div>
      <Box
        padding={[10, 20, 30, 40]}
        background='royalblue'
        color='white'
        borderRadius={4}
        fontSize={20}
        fontWeight='bold'>
        Button
      </Box>
    </div>
  )
}

export default Home
