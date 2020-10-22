import React from 'react';
import { BoxProps } from './Box';
export interface AvatarProps extends BoxProps {
    src?: 'random' | string & {};
    random?: boolean;
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
