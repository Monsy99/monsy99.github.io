import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Homepage from "./Homepage";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage></Homepage>
      </ThemeProvider>
    </div>
  );
}

export default App;
