import React from 'react';
import { JupiterErrorResponse, JupiterQuoteResponse, JupiterRoute, QuoteOption, SwapParams } from '../constants/types';
import Amount from '../utils/amount';
export declare function useJupiter(params: SwapParams): {
    quote: JupiterQuoteResponse | undefined;
    error: JupiterErrorResponse | undefined;
    loading: boolean;
    exchange: (callback?: () => Promise<void>) => Promise<void>;
    refresh: (overrides?: Partial<SwapParams>) => Promise<JupiterQuoteResponse | undefined>;
    reset: (callback?: () => Promise<void>) => Promise<void>;
    selectedRoute: JupiterRoute | undefined;
    setSelectedRoute: React.Dispatch<React.SetStateAction<JupiterRoute | undefined>>;
    quoteOptions: QuoteOption[];
    networkFee: Amount;
};
