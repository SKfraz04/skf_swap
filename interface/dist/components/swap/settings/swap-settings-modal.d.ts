import { GasEstimate, GasFeeOption } from '../../../constants/types';
interface Props {
    useDirectRoute: boolean;
    slippageTolerance: string;
    selectedGasFeeOption: GasFeeOption;
    gasEstimates: GasEstimate;
    setUseDirectRoute: (value: boolean) => void;
    setSlippageTolerance: (value: string) => void;
    setSelectedGasFeeOption: (value: GasFeeOption) => void;
    onClose: () => void;
}
export declare const SwapSettingsModal: (props: Props) => JSX.Element;
export {};
