import { createTheme } from "@mui/material/styles";

const customTheme = (darkMode) =>
  createTheme(
    {
      palette: {
        mode: darkMode ? "dark" : "light",
        primary: {
          main: darkMode ? "#c197db" : "#964ec2",
        },
        secondary: {
          main: darkMode ? "#dbc3ea" : "#562873",
        },
      },
      components: {
        MuiMenuItem: {
          styleOverrides: {
            root: {
              "&$selected": {
                borderRight: "4px solid #f4649f",
                fontWeight: "700",
              },
            },
          },
        },
        MuiPopover: {
          styleOverrides: {
            paper: {
              borderRadius: 2,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              textTransform: "none",
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 3,
              padding: "0px",
            },
            outlined: {
              backgroundColor: darkMode ? "#c197db15" : "#964ec215",
            },
          },
        },
      },
      props: {
        MuiButton: {
          styleOverrides: {
            disableElevation: true,
          },
        },
      },
    })
  

export default customTheme;
