import React from 'react';
interface Props {
    label: string;
    value: string;
    secondaryValue?: string;
    onExpandOut?: () => void;
    children?: React.ReactNode;
}
export declare const ExpandSection: (props: Props) => JSX.Element;
export {};
