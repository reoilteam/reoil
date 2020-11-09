import { BorderRadiusProperty } from 'csstype';
import React from 'react';
export interface SkeletonTextProps {
    borderRadius?: BorderRadiusProperty<string | number>;
    divides?: number[];
    gap?: number;
    color?: 'dark' | 'light' | (string & {});
}
declare const SkeletonText: React.FC<SkeletonTextProps>;
export default SkeletonText;
