import { GestureResponderEvent } from 'react-native';
import type { $RemoveChildren, InternalTheme } from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Value of the radio button
     */
    value: string;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
    /**
     * Whether radio is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Custom color for radio.
     */
    color?: string;
    /**
     * @optional
     */
    theme?: InternalTheme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
declare const RadioButtonIOS: {
    ({ disabled, onPress, theme: themeOverrides, status, value, testID, ...rest }: Props): JSX.Element;
    displayName: string;
};
export default RadioButtonIOS;
export { RadioButtonIOS };
//# sourceMappingURL=RadioButtonIOS.d.ts.map