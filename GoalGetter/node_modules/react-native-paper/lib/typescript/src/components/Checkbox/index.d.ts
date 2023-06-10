declare const Checkbox: (({ theme: themeOverrides, ...props }: import("./Checkbox").Props) => JSX.Element) & {
    Item: {
        ({ style, status, label, onPress, labelStyle, theme: themeOverrides, testID, mode, position, accessibilityLabel, disabled, labelVariant, labelMaxFontSizeMultiplier, ...props }: import("./CheckboxItem").Props): JSX.Element;
        displayName: string;
    };
    Android: {
        ({ status, theme: themeOverrides, disabled, onPress, testID, ...rest }: import("./CheckboxAndroid").Props): JSX.Element;
        displayName: string;
    };
    IOS: {
        ({ status, disabled, onPress, theme: themeOverrides, testID, ...rest }: import("./CheckboxIOS").Props): JSX.Element;
        displayName: string;
    };
};
export default Checkbox;
//# sourceMappingURL=index.d.ts.map