import { red, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const EverBrand = createTheme({
  palette: {
    primary: red,
    secondary: pink,
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export const EverBrandStyles = makeStyles((theme) => ({
  container: {
    backgroundSize: "cover",
    minHeight: "100vh",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(6),
    maxWidth: "50rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  subheading: {
    fontStyle: "italic",
    marginBottom: theme.spacing(4),
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));
