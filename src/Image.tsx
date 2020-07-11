import React, { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { SizeProps, size } from 'styled-system'
import * as CSS from 'csstype'

interface Props extends StyledImageType {
  style?: CSSProperties
  src: string
  alt?: string
  objectFit?: CSS.ObjectFitProperty
  fit?: boolean // Defaults to 'object-fit: cover'
}

const Image: React.FC<Props> = ({objectFit, fit, ...props}) => {

  return(
    <StyledImage style={{
      objectFit: fit&&!objectFit ? 'cover' : objectFit
    }} {...props} />
  )
}

type StyledImageType = SizeProps

const StyledImage = styled.image<StyledImageType>`
  ${size}
`

export default Image
