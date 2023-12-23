import { QuoteOption } from '../../constants/types';
interface Props {
    onClick: (option: QuoteOption) => void;
    option: QuoteOption;
    isSelected: boolean;
    isBest: boolean;
    spotPrice: number | undefined;
}
export declare const SelectQuoteOptionButton: (props: Props) => JSX.Element;
export {};
