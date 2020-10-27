import { createMuiTheme } from "@material-ui/core";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E17899",
    },
    secondary: {
      main: "#78E1C0",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButtonGroup: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});

export default defaultTheme;
