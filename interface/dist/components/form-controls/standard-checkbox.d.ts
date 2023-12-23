interface Props {
    label: string;
    id: string;
    isChecked: boolean;
    labelSize?: '12px' | '14px';
    isBold?: boolean;
    onChange: (id: string, checked: boolean) => void;
}
export declare const StandardCheckbox: (props: Props) => JSX.Element;
export declare const HiddenCheckBox: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export {};
