import React from 'react';
import { RefreshBlockchainStateParams } from '../../constants/types';
interface Props {
    children?: React.ReactNode;
    refreshBlockchainState: (overrides: Partial<RefreshBlockchainStateParams>) => Promise<void>;
    showPrivacyModal: () => void;
}
export declare const SwapContainer: (props: Props) => JSX.Element;
export declare const PrivacyButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export {};
