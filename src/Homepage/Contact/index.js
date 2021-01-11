import {
  Description,
  Email,
  Header,
  SocialMedia,
  SocialMediaIcon,
} from "./styled";
import github from "./images/githubLight.svg";
import facebook from "./images/facebookLight.svg";
import linkedIn from "./images/linkedInLight.svg";

const Contact = () => {
  return (
    <div>
      <Header>Let's talk!</Header>
      <Email>szymon.marczukk@gmail.com</Email>
      <Description>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </Description>
      <SocialMedia>
        <a href="https://github.com/Monsy99">
          <SocialMediaIcon src={github}></SocialMediaIcon>{" "}
        </a>
        <a href="https://www.facebook.com/szymon.marczuk.395/">
          <SocialMediaIcon src={facebook}></SocialMediaIcon>
        </a>
        <a href="https://www.linkedin.com/in/szymon-marczuk-819536175/">
          <SocialMediaIcon src={linkedIn}></SocialMediaIcon>
        </a>
      </SocialMedia>
    </div>
  );
};
export default Contact;
