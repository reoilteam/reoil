export const getComputedJustifyContent = ({ childrenPosition, flexDirection: direction, alignX, alignY, stretch }) => {
    if (direction === 'row') {
        if (alignX)
            return alignX;
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
                                : 'flex-start';
    }
    if (direction === 'column') {
        if (alignY)
            return alignY;
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
                                : 'flex-start';
    }
    return 'flex-start';
};
export const getComputedAlignItems = ({ childrenPosition, flexDirection: direction, alignX, alignY, stretch }) => {
    if (direction === 'column') {
        if (stretch)
            return 'stretch';
        if (alignX)
            return alignX;
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
                                : 'flex-start';
    }
    if (direction === 'row') {
        if (stretch)
            return 'stretch';
        if (alignY)
            return alignY;
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
                                : 'flex-start';
    }
    return 'flex-start';
};
