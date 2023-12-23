// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

import { Registry } from '@brave/swap-interface'

export const locale: Registry = {
  braveSwap: 'Swap',
  braveSwapReviewOrder: 'Review order',
  braveSwapApproveToken: 'Approve $1',
  braveSwapInsufficientBalance: 'Insufficient $1 balance',
  braveSwapInsufficientLiquidity: 'Insufficient liquidity',
  braveSwapSelectToken: 'Select token',
  braveSwapHalf: 'Half',
  braveSwapMax: 'Max',
  braveSwapEnterAnAmount: 'Enter an amount',
  braveSwapFindingPrice: 'Finding best price for you',
  braveSwapBalance: 'Balance:',
  braveSwapSelectAToken: 'Select a token to swap',
  braveSwapShowTokensWithZeroBalances: 'Show tokens with no balance',
  braveSwapHideTokensWithZeroBalances: 'Hide zero balance',
  braveSwapSearchToken: 'Search token by name',
  braveSwapOption: 'Option',
  braveSwapRate: 'Rate',
  braveSwapPriceImpact: 'Price impact',
  braveSwapMinimumReceivedAfterSlippage: 'Minimum received after slippage',
  braveSwapNetworkFee: 'Network fee',
  braveSwapBraveFee: 'Brave fee',
  braveSwapFree: 'Free',
  braveSwapLiquidityProvider: 'Liquidity provider',
  braveSwapSwapAndSend: 'Swap & send',
  braveSwapNoExtraFees: 'NO extra fees!',
  braveSwapConfirmAddress: 'I confirm that the address above is correct',
  braveSwapAddressInputePlaceholder: 'Enter recipients Ethereum address',
  braveSwapSelectAccount: 'Select an account',
  braveSwapToAccount: 'To my account',
  braveSwapToAddress: 'To another address',
  braveSwapSlow: 'Slow',
  braveSwapAverage: 'Average',
  braveSwapFast: 'Fast',
  braveSwapGwei: 'Gwei',
  braveSwapSettings: 'Swap settings',
  braveSwapSlippageTolerance: 'Slippage tolerance',
  braveSwapExchanges: 'Exchanges',
  braveSwapDirectRouteTitle: 'Direct route only',
  braveSwapDirectRouteDescription:
    'It insures only direct routing and also disables split trade trading',
  braveSwapNetworkFeeDescription:
    'Brave uses top the 60 tokens for intermediate routing for performance optimization',
  braveSwapCoinGeckoCheaper: '$1% cheaper than CoinGecko',
  braveSwapCoinGeckoWithin: 'Within $1% CoinGecko',
  braveSwapCoinGeckoExpensive: '$1% more expensive than CoinGecko',
  braveSwapAPI: 'API',
  braveSwapName: 'Name',
  braveSwapConnectWallet: 'Connect Wallet',
  braveSwapDisconnectWallet: 'Disconnect',
  braveSwapSwitchNetwork: 'Switch Network',
  braveSwapAdvanced: 'Advanced',
  braveSwapPortfolioBalance: 'Portfolio balance',
  braveSwapAccounts: 'Accounts',
  braveSwapMyPortfolio: 'My portfolio',
  braveSwapWallet: 'Wallet',
  braveSwapBest: 'Best',
  braveSwapHelpCenter: 'Help Center',
  braveSwapPrivacyPolicy: 'Privacy Policy',
  braveSwapPrivacyDescription: 'This app uses the following third-party APIs:',
  braveSwapV2Disclaimer: 'Brave Swap uses $1 as a DEX aggregator for supported $2 networks. $1 will process the $3 wallet address and IP address to fulfill a transaction (including getting quotes). $1 will ONLY use this data for the purposes of processing transactions.',
  braveSwapV2Privacy: 'Click here for $1 Privacy Policy.',
  braveSwapChangeNetwork: 'Change network'
}
