import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #52899a;
`;

export const HeroContent = styled.div`
  width: 45%;
  height: 80%;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const ImageContent = styled.img`
  width: 70%;
`;
export const Titlecontent = styled.h1`
  width: 75%;
  font-size: 30px;
  font-family: "PT Sans", sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  text-align: center;
`;

export const Buttons = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-evenly;
`;
export const ButtonContent = styled.button`
  width: 40%;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 20px;
`;

export const AwardsImg = styled.img`
  width: 40%;
  margin-right: 20px;
`;
