import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, switchTheme } from "../../../theme/themeSlice";
import { Fixed, Input, Label, Slider } from "./styled";
const ThemeToggleButton = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();
  return (
    <Fixed
      onChange={() => {
        dispatch(switchTheme());
      }}
    >
      <Label isDark={darkTheme}>
        <Input type="checkbox" />
        <Slider isDark={darkTheme}></Slider>
      </Label>
    </Fixed>
  );
};
export default ThemeToggleButton;
