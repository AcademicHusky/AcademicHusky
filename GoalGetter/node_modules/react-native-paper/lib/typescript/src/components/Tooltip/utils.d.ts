import { LayoutRectangle } from 'react-native';
declare type ChildrenMeasurement = {
    width: number;
    height: number;
    pageX: number;
    pageY: number;
};
declare type TooltipLayout = LayoutRectangle;
export declare type Measurement = {
    children: ChildrenMeasurement;
    tooltip: TooltipLayout;
    measured: boolean;
};
export declare const getTooltipPosition: ({ children, tooltip, measured, }: Measurement) => {} | {
    left: number;
    top: number;
};
export {};
//# sourceMappingURL=utils.d.ts.map