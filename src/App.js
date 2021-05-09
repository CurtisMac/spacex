import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

//components
import Header from "./components/header";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
