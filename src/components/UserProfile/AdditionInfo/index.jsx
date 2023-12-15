import AdditionInfoStyled from "./styles";
import ExperiencesAndAboutMe from "../MainContentExperiencesAndAboutMe";
import SkillsAndContacts from "../MainContentSkillsAndContacts";

const AdditionInfo = () => {
  return (
    <AdditionInfoStyled>
      <ExperiencesAndAboutMe />
      <SkillsAndContacts />
    </AdditionInfoStyled>
  );
};

export default AdditionInfo;
