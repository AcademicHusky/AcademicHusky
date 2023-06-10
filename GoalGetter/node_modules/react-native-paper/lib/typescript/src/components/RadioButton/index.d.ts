declare const RadioButton: (({ theme: themeOverrides, ...props }: import("./RadioButton").Props) => JSX.Element) & {
    Group: {
        ({ value, onValueChange, children }: import("./RadioButtonGroup").Props): JSX.Element;
        displayName: string;
    };
    Android: {
        ({ disabled, onPress, theme: themeOverrides, value, status, testID, ...rest }: import("./RadioButtonAndroid").Props): JSX.Element;
        displayName: string;
    };
    IOS: {
        ({ disabled, onPress, theme: themeOverrides, status, value, testID, ...rest }: import("./RadioButtonIOS").Props): JSX.Element;
        displayName: string;
    };
    Item: {
        ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: themeOverrides, accessibilityLabel, testID, mode, position, labelVariant, }: import("./RadioButtonItem").Props): JSX.Element;
        displayName: string;
    };
};
export default RadioButton;
//# sourceMappingURL=index.d.ts.map