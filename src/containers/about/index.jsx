import { AboutText, AboutTitle, AboutInfo, ContainerSection } from "./styles";
import BackgroundImage from "../../assets/images/about/background-about.png";

const About = () => {
  return (
    <ContainerSection
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        justifyContent: "right",
        alignItems: "end",
      }}
    >
      <AboutInfo>
        <AboutTitle>About</AboutTitle>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          recusandae soluta laborum totam, consectetur ad molestiae atque quo a
          quas rem aspernatur earum aut id reprehenderit neque nesciunt
          cupiditate facilis? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit.
        </AboutText>
      </AboutInfo>
    </ContainerSection>
  );
};

export default About;
