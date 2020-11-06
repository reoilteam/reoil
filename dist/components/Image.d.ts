import React, { ImgHTMLAttributes, DetailedHTMLProps } from 'react';
import * as CSS from 'csstype';
export interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src?: 'random' | (string & {});
    objectFit?: CSS.ObjectFitProperty;
    fit?: CSS.ObjectFitProperty;
    cover?: boolean;
    width?: CSS.WidthProperty<number>;
    height?: CSS.HeightProperty<number>;
    minWidth?: CSS.MinWidthProperty<number>;
    minHeight?: CSS.MinHeightProperty<number>;
    maxWidth?: CSS.MaxWidthProperty<number>;
    maxHeight?: CSS.MaxHeightProperty<number>;
    display?: 'inline' | 'block' | 'inline-block' | 'none' | 'unset' | 'initial';
    borderRadius?: CSS.BorderRadiusProperty<number>;
}
declare const Image: React.FC<ImageProps>;
export default Image;
