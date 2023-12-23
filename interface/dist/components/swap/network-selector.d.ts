import { NetworkInfo } from '../../constants/types';
interface Props {
    onSelectNetwork: (network: NetworkInfo) => Promise<void>;
    onClose?: () => void;
    isHeader?: boolean;
}
export declare const NetworkSelector: (props: Props) => JSX.Element;
export {};
