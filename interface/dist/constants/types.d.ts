import Amount from '../utils/amount';
export declare type BlockchainToken = {
    contractAddress: string;
    name: string;
    logo: string;
    isToken: boolean;
    visible: boolean;
    decimals: number;
    symbol: string;
    coingeckoId: string;
    chainId: string;
    coin: number;
};
export declare type NetworkInfo = {
    chainId: string;
    chainName: string;
    blockExplorerUrl: string;
    logo: string;
    symbol: string;
    symbolName: string;
    decimals: number;
    coin: number;
    isEIP1559: boolean;
};
declare type LiquiditySource = {
    name: string;
    proportion: Amount;
};
export declare type QuoteOption = {
    label: string;
    fromAmount: Amount;
    toAmount: Amount;
    minimumToAmount: Amount | undefined;
    fromToken: BlockchainToken;
    toToken: BlockchainToken;
    rate: Amount;
    impact: Amount;
    sources: LiquiditySource[];
    routing: 'split' | 'flow';
    networkFee: string;
    braveFee: SwapFee | undefined;
};
export declare type Registry = Record<string, string>;
export declare type SpotPrices = {
    nativeAsset: string;
    makerAsset: string;
    takerAsset: string;
};
export declare type WalletAccount = {
    name: string;
    address: string;
    coin: number;
};
export declare type SwapAndSend = {
    label: string;
    name: string;
};
export declare type RefreshBlockchainStateParams = {
    network: NetworkInfo;
    account: WalletAccount;
};
export declare type RefreshPricesParams = {
    nativeAsset: BlockchainToken;
    fromAsset: BlockchainToken | undefined;
    toAsset: BlockchainToken | undefined;
};
export declare enum CoinType {
    Solana = 501,
    Ethereum = 60
}
export declare enum ChainID {
    ETHEREUM_MAINNET = "0x1",
    BINANCE_SMART_CHAIN = "0x38",
    POLYGON = "0x89",
    AVALANCHE = "0xa86a",
    CELO = "0xa4ec",
    FANTOM = "0xfa",
    OPTIMISM = "0xa",
    SOLANA_MAINNET = "0x65"
}
export declare type GasFeeOption = {
    id: string;
    name: string;
    icon: string;
};
export declare type Exchange = {
    id: string;
    name: string;
};
export declare type GasEstimate = {
    gasFee: string;
    gasFeeGwei?: string;
    gasFeeFiat?: string;
    time?: string;
};
export declare type SwapFee = {
    fee: string;
    discount: string;
};
export declare type AmountValidationErrorType = 'fromAmountDecimalsOverflow' | 'toAmountDecimalsOverflow';
export declare type SwapValidationErrorType = AmountValidationErrorType | 'insufficientBalance' | 'insufficientFundsForGas' | 'insufficientAllowance' | 'insufficientLiquidity' | 'unknownError';
export declare type SwapParams = {
    fromToken?: BlockchainToken;
    toToken?: BlockchainToken;
    fromAmount: string;
    toAmount: string;
    slippageTolerance: string;
    fromAddress?: string;
};
export declare type ZeroExSwapParams = {
    takerAddress: string;
    sellAmount: string;
    buyAmount: string;
    buyToken: string;
    sellToken: string;
    slippagePercentage: number;
    gasPrice: string;
};
declare type ZeroExSource = {
    name: string;
    proportion: string;
};
export interface ZeroExQuoteResponse {
    price: string;
    value: string;
    gas: string;
    estimatedGas: string;
    gasPrice: string;
    protocolFee: string;
    minimumProtocolFee: string;
    buyTokenAddress: string;
    sellTokenAddress: string;
    buyAmount: string;
    sellAmount: string;
    allowanceTarget: string;
    sellTokenToEthRate: string;
    buyTokenToEthRate: string;
    estimatedPriceImpact: string;
    sources: ZeroExSource[];
}
export interface ZeroExSwapResponse extends ZeroExQuoteResponse {
    guaranteedPrice: string;
    to: string;
    data: string;
}
interface ZeroExValidationError {
    field: string;
    code: number;
    reason: string;
}
export interface ZeroExErrorResponse {
    code: number;
    reason: string;
    validationErrors?: ZeroExValidationError[];
    isInsufficientLiquidity: boolean;
}
export interface ZeroExQuoteResponseWithError {
    response?: ZeroExQuoteResponse;
    errorResponse?: ZeroExErrorResponse;
}
export interface ZeroExSwapResponseWithError {
    response?: ZeroExSwapResponse;
    errorResponse?: ZeroExErrorResponse;
}
export declare type JupiterQuoteParams = {
    inputMint: string;
    outputMint: string;
    amount: string;
    slippageBps: number;
    userPublicKey: string;
};
export declare type JupiterFee = {
    amount: bigint;
    mint: string;
    pct: number;
};
export declare type JupiterMarketInfo = {
    id: string;
    label: string;
    inputMint: string;
    outputMint: string;
    notEnoughLiquidity: boolean;
    inAmount: bigint;
    outAmount: bigint;
    priceImpactPct: number;
    lpFee: JupiterFee;
    platformFee: JupiterFee;
};
export declare type JupiterRoute = {
    inAmount: bigint;
    outAmount: bigint;
    amount: bigint;
    otherAmountThreshold: bigint;
    swapMode: string;
    priceImpactPct: number;
    slippageBps: number;
    marketInfos: JupiterMarketInfo[];
};
export declare type JupiterQuoteResponse = {
    routes: JupiterRoute[];
};
export declare type JupiterSwapParams = {
    route: JupiterRoute;
    userPublicKey: string;
    outputMint: string;
};
export declare type JupiterSwapResponse = {
    swapTransaction: string;
};
export interface JupiterErrorResponse {
    statusCode: string;
    error: string;
    message: string;
    isInsufficientLiquidity: boolean;
}
export interface JupiterSwapResponseWithError {
    response?: JupiterSwapResponse;
    errorResponse?: JupiterErrorResponse;
}
export interface JupiterQuoteResponseWithError {
    response?: JupiterQuoteResponse;
    errorResponse?: JupiterErrorResponse;
}
export declare type GasPrice1559 = {
    slowMaxPriorityFeePerGas: string;
    slowMaxFeePerGas: string;
    avgMaxPriorityFeePerGas: string;
    avgMaxFeePerGas: string;
    fastMaxPriorityFeePerGas: string;
    fastMaxFeePerGas: string;
    baseFeePerGas: string;
};
export declare type ETHSendTransactionParams = {
    from: string;
    to: string;
    value: string;
    data: number[];
    gas?: string;
    gasPrice?: string;
    maxPriorityFeePerGas?: string;
    maxFeePerGas?: string;
};
export declare type ApproveERC20Params = {
    contractAddress: string;
    spenderAddress: string;
    allowance: string;
};
export declare type SOLSendTransactionParams = {
    encodedTransaction: string;
    from: string;
    sendOptions?: {
        maxRetries?: number;
        preflightCommitment?: string;
        skipPreflight?: boolean;
    };
};
export {};
