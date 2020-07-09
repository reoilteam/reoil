import React from 'react';
import { ColorProps, SpaceProps, LayoutProps, FlexProps, FlexboxProps, FontSizeProps, FontFamilyProps, FontWeightProps, FontStyleProps, BackgroundProps, BorderRadiusProps } from 'styled-system';
interface Props extends StyledBoxType {
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
}
declare const Box: React.FC<Props & ColorProps>;
declare type StyledBoxType = SpaceProps & LayoutProps & FlexProps & FlexboxProps & FontSizeProps & FontFamilyProps & FontWeightProps & FontStyleProps & BackgroundProps & BorderRadiusProps;
export default Box;
//# sourceMappingURL=Box.d.ts.map