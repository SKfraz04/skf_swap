export declare const Text: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {
    textSize?: "20px" | "18px" | "16px" | "14px" | "12px" | undefined;
    responsiveTextSize?: "20px" | "18px" | "16px" | "14px" | "12px" | undefined;
    isBold?: boolean | undefined;
    textColor?: "text01" | "text02" | "text03" | "error" | "success" | "warning" | undefined;
    maintainHeight?: boolean | undefined;
    textAlign?: "left" | "right" | undefined;
}, never>;
export declare const StyledDiv: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Row: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    rowWidth?: "dynamic" | "full" | undefined;
    rowHeight?: "dynamic" | "full" | undefined;
    marginBottom?: number | undefined;
    horizontalPadding?: number | undefined;
    verticalPadding?: number | undefined;
    verticalPaddingResponsive?: number | undefined;
    horizontalAlign?: "center" | "flex-start" | "flex-end" | undefined;
    verticalAlign?: "center" | "flex-start" | "flex-end" | undefined;
}, never>;
export declare const Column: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    columnWidth?: "dynamic" | "full" | undefined;
    columnHeight?: "dynamic" | "full" | undefined;
    horizontalAlign?: "center" | "flex-start" | "flex-end" | undefined;
    verticalAlign?: "center" | "flex-start" | "flex-end" | undefined;
    marginBottom?: number | undefined;
    horizontalPadding?: number | undefined;
    verticalPadding?: number | undefined;
}, never>;
export declare const HorizontalSpacer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    size: number;
}, never>;
export declare const VerticalSpacer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    size: number;
}, never>;
export declare const HorizontalDivider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    height?: number | undefined;
    marginLeft?: number | undefined;
    marginLeftResponsive?: number | undefined;
    marginRight?: number | undefined;
    dividerTheme?: "lighter" | "darker" | undefined;
}, never>;
export declare const VerticalDivider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    width?: number | undefined;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
}, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    size: number;
    icon: string;
}, never>;
export declare const Loader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const IconButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    size?: number | undefined;
    icon: string;
}, never>;
export declare const HiddenResponsiveRow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    rowWidth?: "dynamic" | "full" | undefined;
    rowHeight?: "dynamic" | "full" | undefined;
    marginBottom?: number | undefined;
    horizontalPadding?: number | undefined;
    verticalPadding?: number | undefined;
    verticalPaddingResponsive?: number | undefined;
    horizontalAlign?: "center" | "flex-start" | "flex-end" | undefined;
    verticalAlign?: "center" | "flex-start" | "flex-end" | undefined;
} & {
    dontHide?: boolean | undefined;
    maxWidth?: number | undefined;
}, never>;
export declare const ShownResponsiveRow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    rowWidth?: "dynamic" | "full" | undefined;
    rowHeight?: "dynamic" | "full" | undefined;
    marginBottom?: number | undefined;
    horizontalPadding?: number | undefined;
    verticalPadding?: number | undefined;
    verticalPaddingResponsive?: number | undefined;
    horizontalAlign?: "center" | "flex-start" | "flex-end" | undefined;
    verticalAlign?: "center" | "flex-start" | "flex-end" | undefined;
} & {
    maxWidth?: number | undefined;
}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledLabel: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, {}, never>;
