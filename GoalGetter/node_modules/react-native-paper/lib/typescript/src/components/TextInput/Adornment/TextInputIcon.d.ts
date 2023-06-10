import React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import type { $Omit, ThemeProp } from '../../../types';
import type { IconSource } from '../../Icon';
import IconButton from '../../IconButton/IconButton';
export declare type Props = $Omit<React.ComponentProps<typeof IconButton>, 'icon' | 'theme' | 'color'> & {
    /**
     * @renamed Renamed from 'name' to 'icon` in v5.x
     * Icon to show.
     */
    icon: IconSource;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Whether the TextInput will focus after onPress.
     */
    forceTextInputFocus?: boolean;
    /**
     * Color of the icon or a function receiving a boolean indicating whether the TextInput is focused and returning the color.
     */
    color?: ((isTextInputFocused: boolean) => string | undefined) | string;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
declare type StyleContextType = {
    style: StyleProp<ViewStyle>;
    isTextInputFocused: boolean;
    forceFocus: () => void;
    testID: string;
    disabled?: boolean;
};
declare const IconAdornment: React.FunctionComponent<{
    testID: string;
    icon: React.ReactNode;
    topPosition: number;
    side: 'left' | 'right';
    theme?: ThemeProp;
    disabled?: boolean;
} & Omit<StyleContextType, 'style'>>;
/**
 * A component to render a leading / trailing icon in the TextInput
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/textinput-flat.icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       label="Password"
 *       secureTextEntry
 *       right={<TextInput.Icon icon="eye" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const TextInputIcon: {
    ({ icon, onPress, forceTextInputFocus, color, theme: themeOverrides, ...rest }: Props): JSX.Element;
    displayName: string;
    defaultProps: {
        forceTextInputFocus: boolean;
    };
};
export default TextInputIcon;
export { IconAdornment };
//# sourceMappingURL=TextInputIcon.d.ts.map