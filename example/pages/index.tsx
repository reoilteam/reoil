import React from 'react'
import { Box } from 'reoil'

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
      <Box fit='cover' size={30} borderRadius={10}>
        <img src="https://picsum.photos/500" alt=""/>
      </Box>
    </Box>
  )
}

export default Home
