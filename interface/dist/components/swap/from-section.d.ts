import { BlockchainToken } from '../../constants/types';
import Amount from '../../utils/amount';
interface Props {
    onClickSelectToken: () => void;
    onInputChange: (value: string) => void;
    inputValue: string;
    hasInputError: boolean;
    token: BlockchainToken | undefined;
    tokenBalance: Amount;
    fiatValue: string | undefined;
}
export declare const FromSection: (props: Props) => JSX.Element;
export {};
