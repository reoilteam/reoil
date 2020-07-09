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

type JustifyContentProp = CSS.ContentDistribution | CSS.ContentPosition

interface JustifyContentFN {
  (position: Position, direction: FlexDirection): JustifyContentProp
}

// Get justifyContent property based on Position, Direction jsx prop
export const getComputedJustifyContent: JustifyContentFN = (
  position,
  direction
) => {
  if(direction === 'row') {
    return (
      position.center ? 'center' :
      position.left ? 'flex-start' :
      position.right ? 'flex-end' :
      position.rowBetween ? 'space-between' :
      position.rowAround ? 'space-around' :
      position.rowEvenly ? 'space-evenly' : 
      'flex-start'
    )
  }
  if(direction === 'column') {
    return (
      position.center ? 'center' :
      position.top ? 'flex-start' : 
      position.bottom ? 'flex-end' :
      position.colBetween ? 'space-between' :
      position.colAround ? 'space-around' :
      position.colEvenly ? 'space-evenly' :
      'flex-start'
    )
  }
  return 'flex-start'
}
