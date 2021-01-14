import {
  Description,
  Email,
  Header,
  Section,
  SocialMedia,
  SocialMediaIcon,
} from "./styled";
import { selectDarkTheme } from "../../theme/themeSlice";
import github from "./images/github.svg";
import facebook from "./images/facebook.svg";
import linkedIn from "./images/linkedIn.svg";
import githubLight from "./images/githubLight.svg";
import facebookLight from "./images/facebookLight.svg";
import linkedInLight from "./images/linkedInLight.svg";
import { useSelector } from "react-redux";

const Contact = () => {
  const isDark = useSelector(selectDarkTheme);
  return (
    <Section>
      <Header>Let's talk!</Header>
      <Email>szymon.marczukk@gmail.com</Email>
      <Description>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </Description>
      <SocialMedia>
        <a href="https://github.com/Monsy99">
          <SocialMediaIcon
            src={isDark ? github : githubLight}
          ></SocialMediaIcon>{" "}
        </a>
        <a href="https://www.facebook.com/szymon.marczuk.395/">
          <SocialMediaIcon
            src={isDark ? facebook : facebookLight}
          ></SocialMediaIcon>
        </a>
        <a href="https://www.linkedin.com/in/szymon-marczuk-819536175/">
          <SocialMediaIcon
            src={isDark ? linkedIn : linkedInLight}
          ></SocialMediaIcon>
        </a>
      </SocialMedia>
    </Section>
  );
};
export default Contact;
