import styled from "styled-components";

export const Wrapper = styled.section`
  width: 98vw;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #52899a;
`;

export const HeroContent = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ImageContent = styled.img`
  width: 80%;
`;
export const Titlecontent = styled.h1`
  width: 100%;
  font-size: 30px;
  font-family: "PT Sans", sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  text-align: center;
`;

export const Buttons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;
export const ButtonContent = styled.button`
  width: 40%;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 20px;
  border: 1px solid black;
`;
