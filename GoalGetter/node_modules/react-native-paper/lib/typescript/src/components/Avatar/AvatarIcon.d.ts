import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
import { IconSource } from '../Icon';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Icon to display for the `Avatar`.
     */
    icon: IconSource;
    /**
     * Size of the avatar.
     */
    size?: number;
    /**
     * Custom color for the icon.
     */
    color?: string;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 */
declare const Avatar: {
    ({ icon, size, style, theme: themeOverrides, ...rest }: Props): JSX.Element;
    displayName: string;
};
export default Avatar;
//# sourceMappingURL=AvatarIcon.d.ts.map