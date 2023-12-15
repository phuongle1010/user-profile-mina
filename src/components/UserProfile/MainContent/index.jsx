import GenerationInfo from "../MainContentGenerationInfo";
import MainContentStyled from "./styles";
import AdditionInfo from "../AdditionInfo";
import CaseStudy from "../MainContentCaseStudy";

const MainContent = () => {
  return (
    <MainContentStyled>
      <GenerationInfo />
      <AdditionInfo />
      <CaseStudy />
    </MainContentStyled>
  );
};

export default MainContent;
