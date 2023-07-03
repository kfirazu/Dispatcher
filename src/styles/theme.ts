import { PaletteColorOptions, createTheme } from "@mui/material";


declare module '@mui/material/styles' {
    interface PaletteOptions {
        appHeaderBackground?: PaletteColorOptions;
        appBackgroundColor?: PaletteColorOptions
        dropdownScrollbar?: PaletteColorOptions
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#0058B9'
        },
        secondary: {
            main: '#D9DBE9',

        },
        appHeaderBackground: {
            main: '#262146'
        },
        appBackgroundColor: {
            main: '#F3F3FF'
        },
        dropdownScrollbar: {
            main: '#5A5A89'
        },
        // anotherColorWhite: {
        //     main: '#F8F8FF'
        // }
    },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `
    //         h1 {
    //           color: grey;
    //         }
    //       `,
    //     }
    // }
})

export default theme