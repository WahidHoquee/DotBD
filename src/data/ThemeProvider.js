import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Lato',
        ].join(','),
        htmlFontSize: 10
    },
    breakpoints: {
        values: {
          xxs: 0,  
          xs: 400,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#150941'
        },
        secondary: {
            main: '#f80040'
        },
        action: {
            disabledBackground: '#333'
        }
    }
    
})

theme = responsiveFontSizes(theme);

export default theme;