"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComputedJustifyContent = void 0;
exports.getComputedJustifyContent = function (position, direction) {
    if (direction === 'row') {
        return (position.center ? 'center' :
            position.left ? 'flex-start' :
                position.right ? 'flex-end' :
                    position.rowBetween ? 'space-between' :
                        position.rowAround ? 'space-around' :
                            position.rowEvenly ? 'space-evenly' :
                                'flex-start');
    }
    if (direction === 'column') {
        return (position.center ? 'center' :
            position.top ? 'flex-start' :
                position.bottom ? 'flex-end' :
                    position.colBetween ? 'space-between' :
                        position.colAround ? 'space-around' :
                            position.colEvenly ? 'space-evenly' :
                                'flex-start');
    }
    return 'flex-start';
};
//# sourceMappingURL=flex.js.map