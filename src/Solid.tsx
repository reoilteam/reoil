import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Solid: React.FC = ({children, ...props}) => {
  return(
    <div css={css`
      font-size: 50px;
      color: white;
    `}>{children}</div>
  )
}

export default Solid
