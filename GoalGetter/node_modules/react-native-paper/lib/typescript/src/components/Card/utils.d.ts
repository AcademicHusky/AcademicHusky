import type { InternalTheme } from '../../types';
declare type CardMode = 'elevated' | 'outlined' | 'contained';
export declare const getCardCoverStyle: ({ theme, index, total, }: {
    theme: InternalTheme;
    index?: number | undefined;
    total?: number | undefined;
}) => {
    borderRadius: number;
    borderTopLeftRadius?: undefined;
    borderTopRightRadius?: undefined;
    borderBottomLeftRadius?: undefined;
} | {
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderRadius?: undefined;
    borderBottomLeftRadius?: undefined;
} | {
    borderBottomLeftRadius: number;
    borderRadius?: undefined;
    borderTopLeftRadius?: undefined;
    borderTopRightRadius?: undefined;
} | undefined;
export declare const getCardColors: ({ theme, mode, }: {
    theme: InternalTheme;
    mode: CardMode;
}) => {
    backgroundColor: string | undefined;
    borderColor: string;
};
export {};
//# sourceMappingURL=utils.d.ts.map