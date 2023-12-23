import { BlockchainToken, QuoteOption } from '../../constants/types';
interface Props {
    selectedQuoteOption: QuoteOption | undefined;
    fromToken: BlockchainToken | undefined;
    toToken: BlockchainToken | undefined;
    toAmount: string;
}
export declare const QuoteInfo: (props: Props) => JSX.Element;
export {};
