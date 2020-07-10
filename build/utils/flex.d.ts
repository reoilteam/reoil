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
export declare type JustifyContentProps = CSS.JustifyContentProperty;
export declare type AlignItemsProps = CSS.AlignItemsProperty;
interface JustifyContentFN {
    (position: Position, direction: FlexDirection): JustifyContentProps;
}
interface AlignItemsFN {
    (position: Position, direction: FlexDirection): AlignItemsProps;
}
export declare const getComputedJustifyContent: JustifyContentFN;
export declare const getComputedAlignItems: AlignItemsFN;
export {};
//# sourceMappingURL=flex.d.ts.map