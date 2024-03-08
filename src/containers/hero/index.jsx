import {
  AwardsImg,
  ButtonContent,
  Buttons,
  HeroContent,
  ImageContent,
  Titlecontent,
  Wrapper,
} from "./hero";
import BackgroundImage from "../../assets/images/banner-FFRebirth1.png";
import LogoFF from "../../assets/images/ff7_rebirth.png";
import Awards from "../../assets/images/awards-transparent.png";

const Hero = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroContent>
        <ImageContent src={LogoFF} alt="" />
        <Titlecontent>Available now</Titlecontent>
        <Buttons>
          <ButtonContent>Buy Now</ButtonContent>
          <ButtonContent>Watch Trailer</ButtonContent>
        </Buttons>
      </HeroContent>
      <HeroContent
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <AwardsImg
          style={{
            marginTop: "60px",
          }}
          src={Awards}
          alt=""
        />
      </HeroContent>
    </Wrapper>
  );
};

export default Hero;
