import React, { CSSProperties } from 'react';
import { ColorProps, SpaceProps, LayoutProps, FlexProps, FlexboxProps, FontSizeProps, FontFamilyProps, FontWeightProps, FontStyleProps, BackgroundProps, BorderRadiusProps } from 'styled-system';
import * as CSS from 'csstype';
interface Props extends StyledBoxType {
    style?: CSSProperties;
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
    color?: string;
    pointer?: Boolean;
    textTransform?: CSS.TextTransformProperty;
    fit?: CSS.ObjectFitProperty;
}
declare const Box: React.FC<Props & ColorProps>;
declare type StyledBoxType = SpaceProps & LayoutProps & FlexProps & FlexboxProps & FontSizeProps & FontFamilyProps & FontWeightProps & FontStyleProps & BackgroundProps & BorderRadiusProps;
export default Box;
//# sourceMappingURL=Box.d.ts.map