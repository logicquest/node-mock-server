// @flow

import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';

export type CreateContextReturnType = {
	jss: Object,
	theme: Object,
	sheetsManager: Object,
	sheetsRegistry: Object,
	generateClassName: Object,
};

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: pink,
	},
});

// Configure JSS
const jss = create(preset());

export const sheetsManager: Map<*, *> = new Map();

export default function createContext(): CreateContextReturnType {
	return {
		jss,
		theme,
		// This is needed in order to deduplicate the injection of CSS in the page.
		sheetsManager,
		// This is needed in order to inject the critical CSS.
		sheetsRegistry: new SheetsRegistry(),
		generateClassName: createGenerateClassName(),
	};
}