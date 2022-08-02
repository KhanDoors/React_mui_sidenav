export const theme1 = {
  palette: {
    mode: "dark",
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
      defaultProps: {
        elevation: 20,
      },
    },
  },
};
