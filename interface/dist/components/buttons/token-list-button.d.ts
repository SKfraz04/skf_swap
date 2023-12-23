import { BlockchainToken } from '../../constants/types';
import Amount from '../../utils/amount';
interface Props {
    onClick: (token: BlockchainToken) => void;
    token: BlockchainToken;
    balance: Amount;
    disabled: boolean;
    isWalletConnected: boolean;
}
export declare const TokenListButton: (props: Props) => JSX.Element;
export {};
