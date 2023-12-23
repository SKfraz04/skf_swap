import { BlockchainToken } from '../../constants/types';
interface Props {
    onClickSelectToken: () => void;
    onInputChange: (value: string) => void;
    isLoading: boolean | undefined;
    inputValue: string;
    hasInputError: boolean;
    token: BlockchainToken | undefined;
    disabled: boolean;
}
export declare const ToSection: (props: Props) => JSX.Element;
export {};
