import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		common: {
			white: "#fff"
		}
	},
});

export default theme;
