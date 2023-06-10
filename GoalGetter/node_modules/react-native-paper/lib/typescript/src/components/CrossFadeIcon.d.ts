import type { ThemeProp } from '../types';
import { IconSource } from './Icon';
declare type Props = {
    /**
     * Icon to display for the `CrossFadeIcon`.
     */
    source: IconSource;
    /**
     * Color of the icon.
     */
    color: string;
    /**
     * Size of the icon.
     */
    size: number;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
declare const CrossFadeIcon: ({ color, size, source, theme: themeOverrides, testID, }: Props) => JSX.Element;
export default CrossFadeIcon;
//# sourceMappingURL=CrossFadeIcon.d.ts.map