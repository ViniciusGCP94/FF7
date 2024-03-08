import { ContainerSection } from "../about/styles";
import { MediaButton, MediaTitle, MediaVideo } from "./styles";

const media = () => {
  return (
    <ContainerSection
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        backgroundColor: "black",
      }}
    >
      <MediaTitle>Media</MediaTitle>
      <MediaVideo>
        <a href=""></a>
      </MediaVideo>
      <MediaVideo
        style={{
          marginRight: "20px",
        }}
      >
        <a href=""></a>
      </MediaVideo>
      <MediaButton>+ Midias</MediaButton>
    </ContainerSection>
  );
};
export default media;
