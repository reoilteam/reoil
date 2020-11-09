import { RouteComponentProps } from '@reach/router'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Box, SkeletonText } from 'reoil'

const SkeletonDemo: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <Skeleton count={3}  />
      <SkeletonText />
    </>
  )
}

export default SkeletonDemo
