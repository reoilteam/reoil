import * as CSS from 'csstype'

type Position = {
  center?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  row?: boolean
  rowBetween?: boolean
  colBetween?: boolean
  rowAround?: boolean
  colAround?: boolean
  rowEvenly?: boolean
  colEvenly?: boolean
}

type FlexDirection = CSS.FlexDirectionProperty

export type JustifyContentProps = CSS.JustifyContentProperty
export type AlignItemsProps = CSS.AlignItemsProperty


interface JustifyContentFN {
  (position: Position, direction: FlexDirection): JustifyContentProps
}
interface AlignItemsFN {
  (position: Position, direction: FlexDirection): AlignItemsProps
}

// Get justifyContent property based on Position, Direction jsx props
export const getComputedJustifyContent: JustifyContentFN = (
  position,
  direction
) => {
  if(direction === 'row') {
    return (
      position.left ? 'flex-start' :
      position.right ? 'flex-end' :
      position.rowBetween ? 'space-between' :
      position.rowAround ? 'space-around' :
      position.rowEvenly ? 'space-evenly' : 
      position.center ? 'center' :
      'flex-start'
    )
  }
  if(direction === 'column') {
    return (
      position.top ? 'flex-start' : 
      position.bottom ? 'flex-end' :
      position.colBetween ? 'space-between' :
      position.colAround ? 'space-around' :
      position.colEvenly ? 'space-evenly' :
      position.center ? 'center' :
      'flex-start'
    )
  }
  return 'flex-start'
}
// Get alignItemsjustifyContent property based on Position, Direction jsx props
export const getComputedAlignItems: AlignItemsFN = (
  position,
  direction
) => {
  if(direction === 'column') {
    return (
      position.left ? 'flex-start' :
      position.right ? 'flex-end' :
      position.rowBetween ? 'space-between' :
      position.rowAround ? 'space-around' :
      position.rowEvenly ? 'space-evenly' : 
      position.center ? 'center' :
      'flex-start'
    )
  }
  if(direction === 'row') {
    return (
      position.top ? 'flex-start' : 
      position.bottom ? 'flex-end' :
      position.colBetween ? 'space-between' :
      position.colAround ? 'space-around' :
      position.colEvenly ? 'space-evenly' :
      position.center ? 'center' :
      'flex-start'
    )
  }
  return 'flex-start'
}
