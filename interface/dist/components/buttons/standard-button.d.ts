interface StandardButtonStyleProps {
    isSelected?: boolean;
    buttonSize?: 'normal' | 'small';
    buttonStyle?: 'round' | 'square';
    buttonType?: 'primary' | 'secondary';
    buttonWidth?: 'dynamic' | 'full' | number;
    disabled?: boolean;
    horizontalMargin?: number;
    verticalMargin?: number;
    marginRight?: number;
}
interface Props extends StandardButtonStyleProps {
    buttonText: string;
    onClick: () => void;
}
export declare const StandardButton: (props: Props) => JSX.Element;
export {};
