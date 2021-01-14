import { ThemeProvider } from "styled-components";
import { theme, lightTheme } from "./theme";
import Homepage from "./Homepage";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./theme/themeSlice";

function App() {
  const isDark = useSelector(selectDarkTheme);
  return (
    <div className="App">
      <ThemeProvider theme={isDark ? theme : lightTheme}>
        <GlobalStyle />
        <Homepage></Homepage>
      </ThemeProvider>
    </div>
  );
}

export default App;
