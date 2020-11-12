import React from "react";
import { Paper } from "@material-ui/core";
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import "./styles/App.css";
import Index from "./components/NavBar";

function App() {
  const jss2 = create({ plugins: [...jssPreset().plugins, rtl()] });
  const theme = createMuiTheme();
  return (
    <StylesProvider jss={jss2}>
      <ThemeProvider theme={theme}>
        <Paper style={{ overflowX: "hidden" }} width="100%">
          <Index />
        </Paper>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
