import { BlockchainToken, NetworkInfo } from '../../constants/types';
interface Props {
    asset?: BlockchainToken;
    network?: NetworkInfo;
    size: number;
    marginRight?: number;
    isHeader?: boolean;
}
export declare const CreateIconWithPlaceholder: (props: Props) => JSX.Element;
export {};
