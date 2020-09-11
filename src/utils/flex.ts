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
  (params: {
    childrenPosition: Position
    flexDirection: FlexDirection
    alignX?: JustifyContentProps | AlignItemsProps
    alignY?: JustifyContentProps | AlignItemsProps
  }): JustifyContentProps
}
interface AlignItemsFN {
  (parmas: {
    childrenPosition: Position
    flexDirection: FlexDirection
    alignX?: JustifyContentProps | AlignItemsProps
    alignY?: JustifyContentProps | AlignItemsProps
  }): AlignItemsProps
}

// Get justifyContent property based on Position, Direction jsx props
export const getComputedJustifyContent: JustifyContentFN = ({
  childrenPosition,
  flexDirection: direction,
  alignX,
  alignY
}) => {
  if (direction === 'row') {
    if(alignX) return alignX

    return childrenPosition.left
      ? 'flex-start'
      : childrenPosition.right
      ? 'flex-end'
      : childrenPosition.rowBetween
      ? 'space-between'
      : childrenPosition.rowAround
      ? 'space-around'
      : childrenPosition.rowEvenly
      ? 'space-evenly'
      : childrenPosition.center
      ? 'center'
      : 'flex-start'
  }
  if (direction === 'column') {
    if(alignY) return alignY

    return childrenPosition.top
      ? 'flex-start'
      : childrenPosition.bottom
      ? 'flex-end'
      : childrenPosition.colBetween
      ? 'space-between'
      : childrenPosition.colAround
      ? 'space-around'
      : childrenPosition.colEvenly
      ? 'space-evenly'
      : childrenPosition.center
      ? 'center'
      : 'flex-start'
  }
  return 'flex-start'
}
// Get alignItemsjustifyContent property based on Position, Direction jsx props
export const getComputedAlignItems: AlignItemsFN = ({
  childrenPosition,
  flexDirection: direction,
  alignX,
  alignY
}) => {
  if (direction === 'column') {
    if(alignX) return alignX

    return childrenPosition.left
      ? 'flex-start'
      : childrenPosition.right
      ? 'flex-end'
      : childrenPosition.rowBetween
      ? 'space-between'
      : childrenPosition.rowAround
      ? 'space-around'
      : childrenPosition.rowEvenly
      ? 'space-evenly'
      : childrenPosition.center
      ? 'center'
      : 'flex-start'
  }
  if (direction === 'row') {
    if(alignY) return alignY

    return childrenPosition.top
      ? 'flex-start'
      : childrenPosition.bottom
      ? 'flex-end'
      : childrenPosition.colBetween
      ? 'space-between'
      : childrenPosition.colAround
      ? 'space-around'
      : childrenPosition.colEvenly
      ? 'space-evenly'
      : childrenPosition.center
      ? 'center'
      : 'flex-start'
  }
  return 'flex-start'
}
