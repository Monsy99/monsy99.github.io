import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../../theme/themeSlice";
import { Fixed } from "./styled";

const ThemeToggleButton = () => {
  const darkTheme = useSelector(selectDarkTheme);
  return (
    <Fixed>
      <p>DARK MODE {darkTheme && darkTheme ? "ON" : "OFF"}</p>
    </Fixed>
  );
};
export default ThemeToggleButton;
