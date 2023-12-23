import { BlockchainToken, NetworkInfo } from '../constants/types';
export declare const makeNetworkAsset: (network: NetworkInfo) => BlockchainToken;
export declare const getBalanceRegistryKey: (asset: BlockchainToken) => string;
export declare const getBalanceRegistryKeyRaw: (coin: number, chainId: string, contract: string) => string;
