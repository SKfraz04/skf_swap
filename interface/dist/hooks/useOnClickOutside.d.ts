import React from 'react';
declare type Event = MouseEvent | TouchEvent;
export declare const useOnClickOutside: <T extends HTMLElement = HTMLElement>(ref: React.RefObject<T>, handler: (event: Event) => void, startListening: boolean) => void;
export {};
