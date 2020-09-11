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
    (params: {
        childrenPosition: Position;
        flexDirection: FlexDirection;
        alignX?: JustifyContentProps | AlignItemsProps;
        alignY?: JustifyContentProps | AlignItemsProps;
        stretch?: boolean;
    }): JustifyContentProps;
}
interface AlignItemsFN {
    (parmas: {
        childrenPosition: Position;
        flexDirection: FlexDirection;
        alignX?: JustifyContentProps | AlignItemsProps;
        alignY?: JustifyContentProps | AlignItemsProps;
        stretch?: boolean;
    }): AlignItemsProps;
}
export declare const getComputedJustifyContent: JustifyContentFN;
export declare const getComputedAlignItems: AlignItemsFN;
export {};
