import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            lightGreen: string;
            limeGreen: string;
            darkBlue: string;
            darkGreen: string;
        }
    }
}