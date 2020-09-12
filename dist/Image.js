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
const Image = (_a) => {
    var { src, alt, objectFit, fit, cover, height, width, minWidth, minHeight, maxWidth, maxHeight, display, borderRadius } = _a, props = __rest(_a, ["src", "alt", "objectFit", "fit", "cover", "height", "width", "minWidth", "minHeight", "maxWidth", "maxHeight", "display", "borderRadius"]);
    const objectFitStyle = () => {
        if (cover)
            return 'cover';
        if (fit || objectFit)
            return fit || objectFit;
    };
    const randomSeed = (a, b) => {
        return Math.round(Math.random() * (b - a) + a);
    };
    return (React.createElement("img", Object.assign({ src: src ? src === 'random' ? `https://picsum.photos/seed/${randomSeed(0, 3000)}/300` : src : `https://picsum.photos/seed/${randomSeed(0, 3000)}/300`, alt: alt, style: {
            objectFit: objectFitStyle(),
            width,
            height,
            minWidth,
            minHeight,
            maxWidth,
            maxHeight,
            display,
            borderRadius
        } }, props)));
};
export default Image;
