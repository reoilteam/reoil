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
import Box from './Box';
import Image from './Image';
const Avatar = (_a) => {
    var { src, children, random } = _a, props = __rest(_a, ["src", "children", "random"]);
    return (React.createElement(Box, Object.assign({}, props, { center: children ? true : false }), src ? React.createElement(Image, { src: src }) : children));
};
Avatar.defaultProps = {
    borderRadius: '50%',
    cover: true,
    size: 34,
    backgroundColor: 'whitesmoke'
};
export default Avatar;
