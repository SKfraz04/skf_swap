interface Props {
    label: string;
    id: string;
    isChecked: boolean;
    onSetIsChecked: (value: string) => void;
}
export declare const StandardRadio: (props: Props) => JSX.Element;
export declare const Radio: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export {};
