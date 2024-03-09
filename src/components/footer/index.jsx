import { ContainerSection } from "../../containers/about/styles";
import {
  FooterContainer,
  FooterImage,
  FooterSpan,
  FooterSubtitle,
} from "./styles";
import LogoVinnie from "../../assets/images/footer/Dev-nicius.jpg";
import LogoFF7 from "../../assets/images/footer/ffvii-rebirth_Footer.png";
import LogoSquarEnix from "../../assets/images/footer/square-enix-logo-white.png";

const Footer = () => {
  return (
    <ContainerSection
      style={{
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <FooterContainer>
        <FooterImage src={LogoSquarEnix} alt="" />
      </FooterContainer>
      <FooterContainer>
        <FooterImage src={LogoVinnie} alt="" />
      </FooterContainer>
      <FooterContainer
        style={{
          borderBottom: "none",
          display: "flex",
          justifyContent: "center",
          flexWrap: "Wrap",
        }}
      >
        <FooterImage
          style={{
            marginBottom: "20px",
          }}
          src={LogoFF7}
          alt=""
        />
        <FooterSubtitle
          style={{
            width: "100%",
          }}
        >
          FINAL FANTASY VII REBIRTH © SQUARE ENIX
        </FooterSubtitle>
        <FooterSubtitle
          style={{
            width: "100%",
          }}
        >
          CHARACTER DESIGN: TETSUYA NOMURA / ROBERTO FERRARI
        </FooterSubtitle>
        <FooterSubtitle
          style={{
            width: "100%",
          }}
        >
          LOGO ILLUSTRATION:© YOSHITAKA AMANO
        </FooterSubtitle>
        <FooterSpan
          style={{
            width: "100%",
          }}
        >
          ESRB and the ESRB rating icon are registered trademarks of the
          Entertainment Software Association.
        </FooterSpan>
        <FooterSpan
          style={{
            width: "100%",
          }}
        >
          FINAL FANTASY, FINAL FANTASY VII REBIRTH, SQUARE ENIX and the SQUARE
          ENIX logo are registered trademarks or trademarks of Square Enix
          Holdings Co., Ltd.
        </FooterSpan>
        <FooterSpan
          style={{
            width: "100%",
          }}
        >
          “PlayStation Family Mark,” “PlayStation,” “PS5 logo” and “PS5” are
          registered trademarks or trademarks of Sony Interactive Entertainment
          Inc.
        </FooterSpan>
      </FooterContainer>
    </ContainerSection>
  );
};

export default Footer;
