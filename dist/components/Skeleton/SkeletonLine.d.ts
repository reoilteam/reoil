import React from 'react';
export interface SkeletonLineProps {
    width?: string | number;
    height?: string | number;
    darkmode?: boolean;
    color?: 'blackGray' | 'whiteGray' | string & {};
    marginBottom?: string | number;
    borderRadius?: string | number;
    divides?: number[];
    gap?: number | string;
    animationSpeed?: number;
    intervalSpeed?: number;
}
declare const SkeletonLine: React.FC<SkeletonLineProps>;
export default SkeletonLine;
