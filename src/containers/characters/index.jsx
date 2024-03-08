import { ContainerSection } from "../about/styles";
import {
  CharacterImg,
  CharactersButton,
  CharactersContainer,
  CharactersContainerImg,
  CharactersText,
  CharactersTitle,
} from "./styles";
import BackgroundImage from "../../assets/images/characters/final-fantasy-vii-rebirth-bkg.png";
import CharacterImage from "../../assets/images/characters/characters.png";

const Characters = () => {
  return (
    <ContainerSection
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        justifyContent: "left",
        alignItems: "center",
      }}
    >
      <CharactersContainer>
        <CharactersTitle>characters</CharactersTitle>
        <CharactersText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam natus
          alias iure error tenetur perferendis ipsam molestiae ipsa, animi
          voluptatum? Unde aut impedit assumenda totam quidem nam saepe error
          magnam?
        </CharactersText>
        <CharactersButton>View characters</CharactersButton>
      </CharactersContainer>
      <CharactersContainerImg
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <CharacterImg src={CharacterImage} alt="" />
      </CharactersContainerImg>
    </ContainerSection>
  );
};

export default Characters;
