import { createTheme } from '@mui/material/styles';
import {responsiveFontSizes} from "@mui/material";

const customBlue = {
    50: '#e0eef6',
    100: '#b3d6e9',
    200: '#80badb',
    300: '#4d9ecd',
    400: '#268ac2',
    500: '#0075b7',
    600: '#006db0',
    700: '#0062a7',
    800: '#00589f',
    900: '#004590',
    A100: '#bcd7ff',
    A200: '#89b9ff',
    A400: '#569aff',
    A700: '#3c8bff',
};

let theme = createTheme({
    typography: {
        fontSize: 14
    },
    palette: {
        primary: {
            main: customBlue[200],
            light: customBlue[100],
            dark: customBlue[800],
            contrastText: '#fff',
        },
        secondary: {
            main: customBlue.A400,
            light: customBlue.A200,
            dark: customBlue.A700,
            contrastText: '#fff',
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;