import 'styled-components'
import type { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
	/* 
        next comment "eslint-disable" for disable 
        @typescript-eslint/no-empty-interface 
        ThemeType { here empty generates error }
    */
	// eslint-disable-next-line
	export interface DefaultTheme extends ThemeType {}
}
