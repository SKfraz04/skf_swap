import React from 'react';
interface BoxStyleProps {
    boxType: 'primary' | 'secondary';
}
interface Props extends BoxStyleProps {
    children?: React.ReactNode;
}
export declare const SwapSectionBox: (props: Props) => JSX.Element;
export {};
