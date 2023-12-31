import React from 'react';
import { ApproveERC20Params, BlockchainToken, ETHSendTransactionParams, Exchange, GasEstimate, GasPrice1559, JupiterQuoteParams, JupiterQuoteResponseWithError, JupiterSwapParams, JupiterSwapResponseWithError, NetworkInfo, SOLSendTransactionParams, SwapFee, WalletAccount, ZeroExQuoteResponseWithError, ZeroExSwapParams, ZeroExSwapResponseWithError } from '../constants/types';
interface SwapContextInterface {
    getLocale: (key: string) => string;
    getBalance: (address: string, coin: number, chainId: string) => Promise<string>;
    getTokenBalance: (contractAddress: string, address: string, coin: number, chainId: string) => Promise<string>;
    getTokenBalances: (contractAddress: string[], address: string, coin: number, chainId: string) => Promise<{
        [contractAddress: string]: string;
    }>;
    assetsList: BlockchainToken[];
    account?: WalletAccount;
    network: NetworkInfo;
    supportedNetworks: NetworkInfo[];
    switchAccount: (account: WalletAccount) => Promise<void>;
    switchNetwork: (network: NetworkInfo) => Promise<WalletAccount | undefined>;
    isWalletConnected: boolean;
    isReady: boolean;
    connectWallet?: () => Promise<void>;
    disconnectWallet?: () => Promise<void>;
    getTokenPrice: (token: BlockchainToken) => Promise<string>;
    swapService: {
        getZeroExPriceQuote: (params: ZeroExSwapParams) => Promise<ZeroExQuoteResponseWithError>;
        getZeroExTransactionPayload: (params: ZeroExSwapParams) => Promise<ZeroExSwapResponseWithError>;
        getJupiterQuote: (params: JupiterQuoteParams) => Promise<JupiterQuoteResponseWithError>;
        getJupiterTransactionsPayload: (params: JupiterSwapParams) => Promise<JupiterSwapResponseWithError>;
        isSwapSupported: (chainId: string) => Promise<boolean>;
        getBraveFeeForAsset: (asset: BlockchainToken) => Promise<SwapFee>;
    };
    walletAccounts: WalletAccount[];
    exchanges: Exchange[];
    getNetworkFeeEstimate: (chainId: string) => Promise<GasEstimate>;
    defaultBaseCurrency: string;
    ethWalletAdapter: {
        getGasPrice: (chainId: string) => Promise<string>;
        getGasPrice1559: (chainId: string) => Promise<GasPrice1559>;
        sendTransaction: (params: ETHSendTransactionParams) => Promise<void>;
        getERC20Allowance: (contractAddress: string, ownerAddress: string, spenderAddress: string) => Promise<string>;
        getERC20ApproveData: (params: ApproveERC20Params) => Promise<number[]>;
    };
    solWalletAdapter: {
        sendTransaction: (params: SOLSendTransactionParams) => Promise<void>;
    };
}
declare const SwapContext: React.Context<SwapContextInterface | undefined>;
export interface SwapProviderInterface extends SwapContextInterface {
    children?: React.ReactNode;
}
declare const SwapProvider: (props: SwapProviderInterface) => JSX.Element;
declare const useSwapContext: () => SwapContextInterface;
export { SwapContext, SwapProvider, useSwapContext };
