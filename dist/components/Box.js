var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from '@emotion/styled';
import { colorStyle, space, layout, flex, flexbox, fontSize, fontFamily, fontWeight, fontStyle, color, background, borderRadius, boxShadow, textShadow, textAlign, border } from 'styled-system';
import { getComputedJustifyContent, getComputedAlignItems } from '../utils/flex';
import { css } from '@emotion/core';
import Inspect from './Inspect';
const Box = (_a) => {
    var { style, color, row, center, left, right, top, bottom, rowBetween, rowAround, rowEvenly, colBetween, colAround, colEvenly, pointer, textTransform, objectFit, fit, cover, transition, position, fullWidth, inspect, alignX, alignY, stretch, boxSizing, borderBox, contentBox, userSelect, pointerEvents } = _a, props = __rest(_a, ["style", "color", "row", "center", "left", "right", "top", "bottom", "rowBetween", "rowAround", "rowEvenly", "colBetween", "colAround", "colEvenly", "pointer", "textTransform", "objectFit", "fit", "cover", "transition", "position", "fullWidth", "inspect", "alignX", "alignY", "stretch", "boxSizing", "borderBox", "contentBox", "userSelect", "pointerEvents"]);
    const childrenPosition = {
        center,
        left: typeof left === 'boolean' && left ? left : undefined,
        right: typeof right === 'boolean' && right ? right : undefined,
        top: typeof top === 'boolean' && top ? top : undefined,
        bottom: typeof bottom === 'boolean' && bottom ? bottom : undefined,
        rowBetween,
        rowAround,
        rowEvenly,
        colBetween,
        colAround,
        colEvenly
    };
    const flexDirection = row ? 'row' : 'column';
    const justifyContent = getComputedJustifyContent({
        childrenPosition,
        flexDirection,
        alignX,
        alignY,
        stretch
    });
    const alignItems = getComputedAlignItems({
        childrenPosition,
        flexDirection,
        alignX,
        alignY,
        stretch
    });
    const cursor = pointer ? 'pointer' : undefined;
    const transitionStyle = typeof transition === 'boolean'
        ? '.4s'
        : typeof transition === 'string'
            ? transition
            : undefined;
    const objectFitCSS = css `
    img,
    video,
    audio {
      width: 100%;
      height: 100%;
      object-fit: ${cover ? 'cover' : fit || objectFit};
    }
  `;
    return (React.createElement(StyledBox, Object.assign({ color: color, flexDirection: flexDirection, alignItems: alignItems, justifyContent: justifyContent, style: Object.assign({ cursor,
            textTransform, transition: transitionStyle, position, left: typeof left !== 'boolean' ? left : undefined, right: typeof right !== 'boolean' ? right : undefined, top: typeof top !== 'boolean' ? top : undefined, bottom: typeof bottom !== 'boolean' ? bottom : undefined, width: fullWidth ? '100%' : undefined, boxSizing: borderBox && 'border-box' || contentBox && 'content-box' || boxSizing, userSelect,
            pointerEvents }, style), css: css `
        ${cover || fit || objectFit ? objectFitCSS : null};
        ${cover || fit || (objectFit && props.borderRadius)
            ? `overflow: hidden`
            : null};
        position: relative;
      ` }, props),
        inspect && React.createElement(Inspect, null),
        props.children));
};
Box.defaultProps = {
    display: 'flex'
};
const StyledBox = styled.div `
  ${color}
  ${layout}
  ${colorStyle}
  ${space}
  ${flex}
  ${flexbox}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${fontStyle}
  ${background}
  ${borderRadius}
  ${boxShadow}
  ${textShadow}
  ${textAlign}
  ${border}
`;
export default Box;
