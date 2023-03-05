import React from "react";
import "./styl/App.styl";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { EverBrand } from "./components/Themes/EverBrandTheme";
import ApplicationRouter from "./routes";

function App() {
  // Check .env file for app name, otherwise default to basic default color.
  const appName = process.env.REACT_APP_TITLE;
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#ADD8E6",
      },
      secondary: {
        main: "#01016f",
      },
    },
  });

  const appTheme = appName === "EverBrand" ? EverBrand : defaultTheme;
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <div className="app">
        <ApplicationRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
