import { BlockchainToken } from '../../constants/types';
import Amount from '../../utils/amount';
interface VirtualizedTokensListProps {
    tokenList: BlockchainToken[];
    onSelectToken: (token: BlockchainToken) => void;
    getCachedAssetBalance: (token: BlockchainToken) => Amount;
    disabledToken: BlockchainToken | undefined;
    isWalletConnected: boolean;
}
export declare const VirtualizedTokenList: (props: VirtualizedTokensListProps) => JSX.Element;
export {};
