import { RefreshBlockchainStateParams } from '../../constants/types';
interface Props {
    onSearchChanged: (value: string) => void;
    searchValue: string;
    networkSelectorDisabled: boolean;
    refreshBlockchainState: (overrides: Partial<RefreshBlockchainStateParams>) => Promise<void>;
}
export declare const SearchWithNetworkSelector: (props: Props) => JSX.Element;
export {};
