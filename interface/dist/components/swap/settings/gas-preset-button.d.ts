import { GasFeeOption, GasEstimate } from '../../../constants/types';
interface Props {
    isSelected: boolean;
    option: GasFeeOption;
    gasEstimates: GasEstimate;
    onClick: () => void;
}
export declare const GasPresetButton: (props: Props) => JSX.Element;
export {};
