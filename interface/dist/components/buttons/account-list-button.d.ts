import { WalletAccount } from '../../constants/types';
interface Props {
    onClick: (network: WalletAccount) => void;
    account: WalletAccount;
}
export declare const AccountListButton: (props: Props) => JSX.Element;
export {};
