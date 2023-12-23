import { NetworkInfo } from '../../constants/types';
interface Props {
    onClick: (network: NetworkInfo) => void;
    network: NetworkInfo;
    isHeader?: boolean;
}
export declare const NetworkListButton: (props: Props) => JSX.Element;
export {};
