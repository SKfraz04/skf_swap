import React from 'react';
import { WalletState, Dispatch } from './types';
interface WalletStateProviderInterface {
    children?: React.ReactNode;
}
declare const WalletStateProvider: (props: WalletStateProviderInterface) => JSX.Element;
declare const useWalletState: () => {
    state: WalletState;
};
declare const useWalletDispatch: () => {
    dispatch: Dispatch;
};
export { WalletStateProvider, useWalletState, useWalletDispatch };
