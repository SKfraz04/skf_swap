import { Registry, Exchange, GasEstimate, SpotPrices } from '../constants/types';
export declare type WalletState = {
    tokenBalances: Registry;
    spotPrices: SpotPrices;
    userSelectedExchanges: Exchange[];
    networkFeeEstimates: Record<string, GasEstimate>;
};
declare type UpdateTokenBalances = {
    type: 'updateTokenBalances';
    payload: Registry;
};
declare type UpdateSpotPrices = {
    type: 'updateSpotPrices';
    payload: Partial<SpotPrices>;
};
declare type UpdateUserSelectedExchanges = {
    type: 'updateUserSelectedExchanges';
    payload: Exchange[];
};
declare type UpdateDefaultBaseCurrency = {
    type: 'updateDefaultBaseCurrency';
    payload: string;
};
export declare type WalletActions = UpdateTokenBalances | UpdateSpotPrices | UpdateUserSelectedExchanges | UpdateDefaultBaseCurrency;
export declare type Dispatch = (action: WalletActions) => void;
export {};
