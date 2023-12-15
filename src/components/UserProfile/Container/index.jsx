import MainContent from "../MainContent";
import SideBar from "../SideBar";
import ContainerStyled from "./styles";

const Container = () => {
  return (
    <ContainerStyled>
      <SideBar />
      <MainContent />
    </ContainerStyled>
  );
};

export default Container;
