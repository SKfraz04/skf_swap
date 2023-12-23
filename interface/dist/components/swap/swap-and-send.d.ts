import { WalletAccount } from '../../constants/types';
interface Props {
    selectedSwapAndSendOption: string;
    toAnotherAddress: string;
    selectedSwapSendAccount: WalletAccount | undefined;
    userConfirmedAddress: boolean;
    swapAndSendSelected: boolean;
    onChangeSwapAndSendSelected: (value: boolean) => void;
    onCheckUserConfirmedAddress: (id: string, checked: boolean) => void;
    handleOnSetToAnotherAddress: (value: string) => void;
    onSelectSwapAndSendOption: (value: string) => void;
    onSelectSwapSendAccount: (account: WalletAccount | undefined) => void;
}
export declare const SwapAndSend: (props: Props) => JSX.Element;
export {};
