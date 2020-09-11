import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Box } from 'reoil'

const BoxAlign: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <Box className='container' color='white'>
        <Box bg='royalblue'>
          Before: Without fullWidth or Stretch or flex:1, the Box width will depend on content itself.
        </Box>
      </Box>

      <Box className="container" color="white">
        <Box bg='hotpink' fullWidth>
          After: With fullWidth prop provided at child Box, the Box width will equal to 100%, so it will expand the width depend on container.
        </Box>
      </Box>

      <Box className="container" color="white" alignX='flex-end' height={50} alignY='flex-end'>
        <Box bg='slateblue'>
          After II: With stretch prop provided at Parent Container Box, the child Box will stretch the width depend on container.
        </Box>
      </Box>
    </>
  )
}

export default BoxAlign
