"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var flex_1 = require("./utils/flex");
var Box = function (_a) {
    var color = _a.color, row = _a.row, center = _a.center, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, rowBetween = _a.rowBetween, rowAround = _a.rowAround, rowEvenly = _a.rowEvenly, colBetween = _a.colBetween, colAround = _a.colAround, colEvenly = _a.colEvenly, props = __rest(_a, ["color", "row", "center", "left", "right", "top", "bottom", "rowBetween", "rowAround", "rowEvenly", "colBetween", "colAround", "colEvenly"]);
    var position = {
        center: center,
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        rowBetween: rowBetween,
        rowAround: rowAround,
        rowEvenly: rowEvenly,
        colBetween: colBetween,
        colAround: colAround,
        colEvenly: colEvenly
    };
    var direction = row ? 'row' : 'column';
    var justifyContent = flex_1.getComputedJustifyContent(position, direction);
    return react_1.default.createElement(StyledBox, __assign({ color: color, flexDirection: direction, justifyContent: justifyContent }, props));
};
Box.defaultProps = {
    display: 'flex'
};
var StyledBox = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.color, styled_system_1.layout, styled_system_1.colorStyle, styled_system_1.space, styled_system_1.flex, styled_system_1.flexbox, styled_system_1.fontSize, styled_system_1.fontFamily, styled_system_1.fontWeight, styled_system_1.fontStyle, styled_system_1.background, styled_system_1.borderRadius);
exports.default = Box;
var templateObject_1;
//# sourceMappingURL=Box.js.map