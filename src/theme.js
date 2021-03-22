import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#111',
        }
    },
    typography: {
        fontFamily: 'montserrat',
        color: '#fff',
   },
   overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#181B48',
                    color: '#fff',
                },
            },
       },
    },
});

