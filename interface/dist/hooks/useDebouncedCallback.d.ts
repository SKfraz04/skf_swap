export declare function useDebouncedCallback<A extends any[]>(callback: (...args: A) => Promise<void>, wait: number): (...args: A) => Promise<void>;
