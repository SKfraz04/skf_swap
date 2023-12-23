import React from 'react';
interface Props {
    children?: React.ReactNode;
    modalHeight?: 'standard' | 'full' | 'dynamic';
    modalBackground?: 'background01' | 'background02';
}
export declare const StandardModal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
