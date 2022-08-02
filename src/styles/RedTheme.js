export const theme2 = {
  palette: {
    primary: {
      main: "#94092c",
    },
    secondary: {
      main: "#FFC000",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "10px",
          margin: 1,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "gray",
        },
      },
      defaultProps: {
        elevation: 20,
      },
    },
  },
};
