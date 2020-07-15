import React from 'react';
import { BoxProps } from './Box';
interface Props extends BoxProps {
    src?: string;
    random?: boolean;
}
declare const Avatar: React.FC<Props>;
export default Avatar;
