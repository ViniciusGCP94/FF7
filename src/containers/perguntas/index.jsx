import { useState } from "react";
import { Answer, FaqContainer, Question, QuestionWrapper } from "./styled";
import { ContainerSection } from "../about/styles";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question:
        "PRECISO JOGAR FINAL FANTASY VII REMAKE OU REMAKE INTERGRADE PARA ENTENDER A HISTÓRIA DE FINAL FANTASY VII REBIRTH?",
      answer: `FINAL FANTASY VII REBIRTH é um jogo independente que dá as boas-vindas tanto a fãs quanto a novatos.Nesta aventura independente, Cloud e seus companheiros se aventuram pelo planeta, seus destinos não escritos, tornando cada passo no mundo expansivo fora de Midgar fresco e misterioso. O menu do jogo oferece um vídeo de recapitulação da história de FINAL FANTASY VII REMAKE para aqueles interessados em aprender mais sobre a história até agora, e aqueles que desejam experimentar FINAL FANTASY VII REMAKE completamente podem pré-encomendar o FINAL FANTASY VII REMAKE & REBIRTH Twin Pack, que inclui o jogo mais o DLC Episode INTERmission sem custo extra.* FINAL FANTASY VII REMAKE & REBIRTH Twin Pack Oferecendo grande valor durante a fase de pré-encomenda, o Twin Pack inclui FINAL FANTASY VII REBIRTH, disponível no lançamento, e o download completo do jogo FINAL FANTASY VII REMAKE INTERGRADE que estará disponível para jogar assim que o Twin Pack for pré-encomendado.`,
    },

    {
      question:
        "FINAL FANTASY VII REBIRTH ESTÁ DISPONÍVEL APENAS NO PLAYSTATION 5?",
      answer: "FINAL FANTASY VII REBIRTH será lançado no PlayStation 5.",
    },

    {
      question: "QUE TIPO DE JOGO É FINAL FANTASY VII REBIRTH?",
      answer:
        "FINAL FANTASY VII REBIRTH, um RPG de ação, é o segundo jogo do projeto épico e aclamado pela crítica de remake de FINAL FANTASY, que busca reimaginar o lendário RPG em três partes distintas e independentes.O jogo apresenta um sistema de batalha evoluído onde os jogadores podem combinar pensamento estratégico com combate de ação emocionante ao lado de seus camaradas, incluindo personagens recém-adicionados. Além disso, o jogo apresenta um mundo vasto e vibrante, onde os jogadores podem esperar novas aventuras, incluindo correr por planícies gramadas em um Chocobo e explorar ambientes extensos.",
    },

    {
      question:
        "HÁ ALGUMA RECOMPENSA PARA JOGADORES QUE JOGARAM FINAL FANTASY VII REMAKE OU EPISODE INTERMISSION?",
      answer:
        "Os jogadores serão elegíveis para receber uma Summon Materia especial, se os dados salvos correspondentes forem encontrados no PS5.Leviathan Summoning Materia será concedida para propriedade e dados salvos de FINAL FANTASY VII REMAKE.Ramuh Summoning Materia será concedida para propriedade e dados salvos de FINAL FANTASY VII REMAKE EPISODE INTERmission Os respectivos dados salvos criados como parte do “FINAL FANTASY VII REMAKE & REBIRTH Twin Pack” também serão elegíveis.",
    },

    {
      question: "PRECISO TER JOGADO ALGUM OUTRO JOGO FINAL FANTASY?",
      answer:
        "Não, cada FINAL FANTASY tem sua própria história, o que significa que você pode começar com FINAL FANTASY VII REBIRTH sem nunca ter jogado outro jogo da série.",
    },

    {
      question: "EXISTE ALGUM DLC PÓS-LANÇAMENTO PARA O JOGO?",
      answer: "Não temos planos para conteúdo DLC pós-lançamento.",
    },
    // Adicione mais perguntas e respostas conforme necessário
  ];

  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ContainerSection
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center", // Adicionado para centralizar as perguntas e respostas
      }}
    >
      <FaqContainer>
        {faqData.map((faq, index) => (
          <div key={index}>
            <QuestionWrapper>
              <Question onClick={() => handleQuestionClick(index)}>
                {faq.question}
              </Question>
            </QuestionWrapper>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </div>
        ))}
      </FaqContainer>
    </ContainerSection>
  );
};

export default Faq;
