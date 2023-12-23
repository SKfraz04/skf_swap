import React from 'react';
import { BlockchainToken, NetworkInfo, RefreshBlockchainStateParams } from '../../constants/types';
import Amount from '../../utils/amount';
interface Props {
    onClose: () => void;
    onSelectToken: (token: BlockchainToken) => void;
    getCachedAssetBalance: (token: BlockchainToken) => Amount;
    disabledToken: BlockchainToken | undefined;
    selectingFromOrTo: 'from' | 'to';
    refreshBlockchainState: (overrides: Partial<RefreshBlockchainStateParams>) => Promise<void>;
    getNetworkAssetsList: (network: NetworkInfo) => BlockchainToken[];
}
export declare const SelectTokenModal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
