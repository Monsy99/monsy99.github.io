import {
  Button,
  ButtonImg,
  Caption,
  Section,
  Description,
  Name,
  Mailto,
  Portrait,
} from "./styled";
import portraitImg from "../../images/Szymon_prof.jpg";
import buttonImg from "../../images/Message.svg";
import ThemeToggleButton from "./ThemeToggleButton";

const Head = () => {
  return (
    <Section>
      <Portrait src={portraitImg}></Portrait>
      <div>
        <ThemeToggleButton></ThemeToggleButton>
        <Caption>Hi, my name is</Caption>
        <Name>Szymon Marczuk</Name>
        <Description>
          👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
          looking for new job opportunities
        </Description>
        <Mailto href="mailto:szymon.marczukk@gmail.com">
          <Button>
            <ButtonImg src={buttonImg}></ButtonImg>
            Hire me
          </Button>
        </Mailto>
      </div>
    </Section>
  );
};
export default Head;
