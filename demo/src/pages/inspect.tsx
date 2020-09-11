import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Box, Avatar } from 'reoil'

const InspectPage: React.FC<RouteComponentProps> = () => {

  return (
    <Box inspect>
      <Box padding={10} bg='royalblue' borderRadius={2} fontSize={4} color='white'>
        Button
      </Box>
      <Box padding={10}>
        <Avatar src='https://picsum.photos/200' size={100} border='10px solid whitesmoke' />
      </Box>
    </Box>
  )
}

export default InspectPage
