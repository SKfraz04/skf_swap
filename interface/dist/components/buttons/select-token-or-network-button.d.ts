import { BlockchainToken, NetworkInfo } from '../../constants/types';
interface SelectTokenButtonStyleProps {
    buttonType?: 'primary' | 'secondary';
    buttonSize?: 'big' | 'medium' | 'small';
    moreRightPadding?: boolean;
    hasBackground?: boolean;
    hasShadow?: boolean;
    networkNotSupported?: boolean;
}
interface Props extends SelectTokenButtonStyleProps {
    onClick: () => void;
    text: string | undefined;
    disabled?: boolean;
    networkFeeFiatValue?: string;
    isHeader?: boolean;
    asset?: BlockchainToken;
    network?: NetworkInfo;
}
export declare const SelectTokenOrNetworkButton: (props: Props) => JSX.Element;
export {};
