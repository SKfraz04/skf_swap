import { QuoteOption } from '../../constants/types';
interface Props {
    options: QuoteOption[];
    selectedQuoteOptionIndex: number;
    onSelectQuoteOption: (index: number) => void;
}
export declare const QuoteOptions: (props: Props) => JSX.Element;
export {};
