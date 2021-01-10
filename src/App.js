import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Homepage from "./Homepage";
import { GlobalStyle } from "./GlobalStyle";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Homepage></Homepage>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
