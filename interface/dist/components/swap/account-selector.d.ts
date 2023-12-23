import { WalletAccount } from '../../constants/types';
interface Props {
    disabled?: boolean;
    selectedAccount: WalletAccount | undefined;
    showAccountSelector: boolean;
    setShowAccountSelector: (value: boolean) => void;
    onSelectAccount: (account: WalletAccount) => void;
}
export declare const AccountSelector: (props: Props) => JSX.Element;
export {};
