import {
  ButtonContent,
  Buttons,
  HeroContent,
  ImageContent,
  Titlecontent,
  Wrapper,
} from "./hero";
import BackgroundImage from "../../assets/images/banner-FFRebirth1.png";
import LogoFF from "../../assets/images/ff7_rebirth.png";

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
    </Wrapper>
  );
};

export default Hero;
