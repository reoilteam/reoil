import React from 'react'
import { Box, Image } from 'reoil'

const Home: React.FC = () => {
  return (
    <Box>
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
      <Box size={50} cover borderRadius={20}>
        <Image src='https://picsum.photos/200'/>
      </Box>
      <Image src='https://picsum.photos/200' width={100} height={200} cover />
      <Box>
        <h1>Hello</h1>
      </Box>
    </Box>
  )
}

export default Home
