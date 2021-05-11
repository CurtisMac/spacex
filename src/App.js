import React, { useReducer, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import theme from "./styles/theme";
import { initialState, launchesReducer } from "./reducers/launchesReducer";
import api from "./adapters/launchesApi";

//components
import Header from "./components/header";
import Launches from "./components/launches";
import FeaturedImg from "./components/featuredImg";

//styles
const Main = styled.main`
  display: flex;
  flex-flow: row wrap;
  & .featuredImg_container {
    width: 40%;
    box-sizing: border-box;
    padding: 90px 30px 20px 40px;
    @media (max-width: ${(props) => props.theme.sm}) {
      display: none;
    }
  }
  & .launches_container {
    width: 60%;
    box-sizing: border-box;
    padding: 40px 80px 20px 30px;
    @media (max-width: ${(props) => props.theme.lg}) {
      padding: 40px 40px 20px 10px;
    }
    @media (max-width: ${(props) => props.theme.sm}) {
      width: 100%;
      padding: 15px 20px;
    }
    @media (max-width: ${(props) => props.theme.xs}) {
      width: 100%;
      padding: 5px;
    }
  }
`;

const App = () => {
  const [state, dispatch] = useReducer(launchesReducer, initialState);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await api.getAllData().catch((err) => {
        setError("Network error");
      });
      dispatch({ type: "load", payload: data });
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <FeaturedImg className="featuredImg_container" />
          <Launches
            className="launches_container"
            dispatch={dispatch}
            state={state}
          />
        </Main>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
