import React from 'react';
import { BoxComponentProps } from './Box';
export interface AvatarProps extends BoxComponentProps {
    src?: 'random' | (string & {});
    random?: boolean;
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
