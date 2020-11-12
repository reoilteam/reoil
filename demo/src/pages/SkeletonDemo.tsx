import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { SkeletonLine } from 'reoil'

const SkeletonDemo: React.FC<RouteComponentProps> = () => {
  return(
    <>
      <div style={{padding: 20, marginTop: 20}}>
        <SkeletonLine divides={[1,2]} />
        <SkeletonLine divides={[1,1]} />
        <SkeletonLine divides={[1,6,4,7]} width='80%' />
      </div>

      <div style={{padding: 20, marginTop: 20, background: 'black'}}>
        <SkeletonLine divides={[1,2]} darkmode />
        <SkeletonLine divides={[1,1]} darkmode />
        <SkeletonLine divides={[1,6,4,7]} width='80%' darkmode />
      </div>

    </>
  )
}

export default SkeletonDemo
