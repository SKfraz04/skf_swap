import { RefreshBlockchainStateParams } from '../../../constants/types';
interface Props {
    onHideModal: () => void;
    refreshBlockchainState: (overrides: Partial<RefreshBlockchainStateParams>) => Promise<void>;
}
export declare const AccountModal: (props: Props) => JSX.Element;
export {};
