import { ContainerSection } from "../about/styles";
import { StoryInfo, StorySubtitle, StoryText, StoryTitle } from "./styles";
import BackgroundImage from "../../assets/images/story/story_container.png";
const Story = () => {
  return (
    <ContainerSection
      style={{
        height: "110vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        justifyContent: "left",
        alignItems: "end",
      }}
    >
      <StoryInfo>
        <StoryTitle>História</StoryTitle>
        <StorySubtitle>A jornada desconhecida continua...</StorySubtitle>
        <StoryText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          laboriosam beatae id quia, quo accusamus quae. Mollitia beatae
          assumenda iure quam.
        </StoryText>
      </StoryInfo>
    </ContainerSection>
  );
};
export default Story;
