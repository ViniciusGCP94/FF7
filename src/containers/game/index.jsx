import {
  GameInfo,
  GameInfoImg,
  GameInfoText,
  GameInfoTitle,
  InfoButton,
} from "./styles";
import BackgroundImage from "../../assets/images/game/game-background.png";
import Battle from "../../assets/images/game/battle-img.png";
import World from "../../assets/images/game/worlds-img.png";
import { ContainerSection } from "../about/styles";

const Game = () => {
  return (
    <ContainerSection
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        justifyContent: "left",
        alignItems: "center",
      }}
    >
      <GameInfo>
        <GameInfoImg src={Battle} alt="" />
        <GameInfoTitle>Battle</GameInfoTitle>
        <GameInfoText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          corrupti consequatur impedit tenetur nemo harum tempore nisi explicabo
          delectus ad, autem ut possimus nulla iusto temporibus illo quasi at
          sint?
        </GameInfoText>
        <InfoButton>View Summons</InfoButton>
      </GameInfo>
      <GameInfo
        style={{
          marginRight: "20px",
        }}
      >
        <GameInfoImg src={World} alt="" />
        <GameInfoTitle>World</GameInfoTitle>
        <GameInfoText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          corrupti consequatur impedit tenetur nemo harum tempore nisi explicabo
          delectus ad, autem ut possimus nulla iusto temporibus illo quasi at
          sint?
        </GameInfoText>
        <InfoButton>Explore Worlds</InfoButton>
      </GameInfo>
    </ContainerSection>
  );
};

export default Game;
