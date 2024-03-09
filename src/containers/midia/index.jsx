import { ContainerSection } from "../about/styles";
import { MediaButton, MediaTitle, MediaVideo, Videos } from "./styles";

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
      <MediaVideo
        style={{
          marginLeft: "20px",
        }}
      >
        <Videos
          width="630"
          height="320"
          src="https://www.youtube.com/embed/6dbPcO5TFhY?list=TLGG1-y_XDGZ14EwODAzMjAyNA"
          title="FINAL FANTASY VII REBIRTH: trailer de elogios"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Videos>
      </MediaVideo>
      <MediaVideo
        style={{
          marginRight: "20px",
        }}
      >
        <Videos
          width="630"
          height="320"
          src="https://www.youtube.com/embed/Q56cRDseTGQ?list=TLGG7yMM_c_-I18wODAzMjAyNA"
          title="FINAL FANTASY VII REBIRTH: trailer final"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Videos>
      </MediaVideo>
      <MediaButton>Outros Vídeos</MediaButton>
    </ContainerSection>
  );
};
export default media;
