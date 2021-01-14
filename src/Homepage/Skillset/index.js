import {
  Container,
  Header,
  Section,
  Separator,
  List,
  Item,
  Bullet,
} from "./styled";
import bulletImg from "../../images/list_bullet.svg";
import bulletImgLight from "../../images/list_bullet_light.svg";
import { skills, learnNext } from "./skills";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../theme/themeSlice";

const Skillset = () => {
  const isDark = useSelector(selectDarkTheme);
  return (
    <>
      <Section>
        <Container>
          <Header>My skillset includes 🛠️</Header>
          <Separator />
          <List>
            {skills.map((skill) => {
              return (
                <Item key={skill.valueOf()}>
                  <Bullet src={isDark ? bulletImg : bulletImgLight} alt="" />
                  {skill.valueOf()}
                </Item>
              );
            })}
          </List>
        </Container>
      </Section>
      <Section>
        <Container>
          <Header>What i want to learn next 🚀</Header>
          <Separator />
          <List>
            {learnNext.map((skill) => {
              return (
                <Item key={skill.valueOf()}>
                  <Bullet src={isDark ? bulletImg : bulletImgLight} alt="" />
                  {skill.valueOf()}
                </Item>
              );
            })}
          </List>
        </Container>
      </Section>
    </>
  );
};
export default Skillset;
