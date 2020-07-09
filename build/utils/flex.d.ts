import * as CSS from 'csstype';
declare type Position = {
    center?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    row?: boolean;
    rowBetween?: boolean;
    colBetween?: boolean;
    rowAround?: boolean;
    colAround?: boolean;
    rowEvenly?: boolean;
    colEvenly?: boolean;
};
declare type FlexDirection = CSS.FlexDirectionProperty;
declare type JustifyContentProp = CSS.ContentDistribution | CSS.ContentPosition;
interface JustifyContentFN {
    (position: Position, direction: FlexDirection): JustifyContentProp;
}
export declare const getComputedJustifyContent: JustifyContentFN;
export {};
//# sourceMappingURL=flex.d.ts.map