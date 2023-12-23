import { QuoteOption, SwapParams, ZeroExErrorResponse, ZeroExQuoteResponse } from '../constants/types';
import Amount from '../utils/amount';
export declare function useZeroEx(params: SwapParams): {
    quote: ZeroExQuoteResponse | undefined;
    error: ZeroExErrorResponse | undefined;
    hasAllowance: boolean;
    loading: boolean;
    exchange: (overrides?: Partial<SwapParams>, callback?: () => Promise<void>) => Promise<void>;
    refresh: (overrides?: Partial<SwapParams>) => Promise<ZeroExQuoteResponse | undefined>;
    reset: (callback?: () => Promise<void>) => Promise<void>;
    approve: () => Promise<void>;
    quoteOptions: QuoteOption[];
    networkFee: Amount;
};
