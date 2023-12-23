import BigNumber from 'bignumber.js';
export declare type AbbreviationOptions = 'thousand' | 'million' | 'billion' | 'trillion';
declare type BigNumberIsh = BigNumber | string | number;
declare type AmountLike = Amount | BigNumberIsh;
export default class Amount {
    readonly value?: BigNumber;
    constructor(value: BigNumberIsh);
    static zero(): Amount;
    static empty(): Amount;
    plus(value: AmountLike): Amount;
    minus(value: AmountLike): Amount;
    times(value: AmountLike): Amount;
    div(value: AmountLike): Amount;
    divideByDecimals(decimals: number): Amount;
    multiplyByDecimals(decimals: number): Amount;
    gt(amount: AmountLike): boolean;
    gte(amount: AmountLike): boolean;
    lt(amount: AmountLike): boolean;
    lte(amount: AmountLike): boolean;
    eq(amount: AmountLike): boolean;
    /**
     * Returns the normalized string of the given numeric value.
     *
     * This function is typically used for converting a hex value to
     * numeric value.
     *
     * Invalid values return an empty string.
     *
     * @param value Numeric value to normalize.
     */
    static normalize(value: string): string;
    private static formatAmountWithCommas;
    format(significantDigits?: number, commas?: boolean): string;
    formatAsAsset(significantDigits?: number, symbol?: string): string;
    formatAsFiat(currency?: string): string;
    toHex(): string;
    toNumber(): number;
    isUndefined(): boolean;
    isNaN(): boolean;
    isZero(): boolean;
    isPositive(): boolean;
    isNegative(): boolean;
    parseInteger(): Amount;
    abbreviate(decimals: number, currency?: string, forceAbbreviation?: AbbreviationOptions): string;
}
export {};
