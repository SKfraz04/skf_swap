import { RefreshBlockchainStateParams } from '../../constants/types';
interface Props {
    refreshBlockchainState: (overrides: Partial<RefreshBlockchainStateParams>) => Promise<void>;
}
export declare const Header: (props: Props) => JSX.Element;
export {};
