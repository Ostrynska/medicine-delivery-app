import "@fontsource/poppins";
import 'modern-normalize/modern-normalize.css';
import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};


const overrides = {
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    fontFamily: "Poppins",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          body: {
            fontFamily: "Poppins",
          },
        },
      },
    },
    DonateButton: {
      styleOverrides: {
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: Colors.primary,
            color: Colors.white,
          },
        },
        secondary: {
          background: Colors.secondary,
          "&:hover": {
            background: Colors.secondary,
            color: Colors.white,
          },
        },
      },
    },
  },
};

const theme = createTheme(overrides);

export { overrides };
export default theme;
