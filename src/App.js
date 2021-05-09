import React, { useReducer, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { initialState, launchesReducer } from "./reducers/launchesReducer";

//components
import Header from "./components/header";

const App = () => {
  const [state, dispatch] = useReducer(launchesReducer, initialState);
  const [error, setError] = useState(null);
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
