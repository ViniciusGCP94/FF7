import styled from "styled-components";

export const FaqContainer = styled.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  font-family: "PT Sans", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  overflow: auto;
  background-color: black;
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Question = styled.div`
  width: 100%;
  background-color: ${({ isOpen }) => (isOpen ? "#439CB6" : "#000")};
  color: ${({ isOpen }) => (isOpen ? "#000" : "#439CB6")};
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  border: 1px solid #439cb6;
`;

export const Answer = styled.div`
  font-size: 16px;
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  text-transform: none;
  background-color: #000;
  color: #fff;
  padding: 20px 30px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  height: auto; /* Alterado para 'auto' para permitir que a resposta se ajuste ao conteúdo */
  max-height: 100%; /* Adicionado para garantir que a resposta não ultrapasse 100% da altura do contêiner pai */
  overflow: hidden; /* Adicionado para ocultar a barra de rolagem lateral */
`;
