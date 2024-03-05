import { ContainerSection } from "../about/styles";
import {
  CharacterImg,
  CharactersButton,
  CharactersContainer,
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
      <CharactersContainer
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          border: "1px solid blue",
          height: "100vh",
          display: "flex",
          justifyContent: "Center",
          alignItems: "flex-end",
          margin: "0",
          padding: "0",
        }}
      >
        <CharacterImg src={CharacterImage} alt="" />
      </CharactersContainer>
    </ContainerSection>
  );
};

export default Characters;
