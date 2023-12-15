import LogoAndTitle from "../MainContentLogoAndTitle";
import MenuBottom from "../SideBarMenuBottom";
import MenuTop from "../SideBarMenuTop";
import SearchBox from "../SideBarSearchBox";
import SideBarStyled from "./styles";

const SideBar = () => {
  return (
    <SideBarStyled>
      <LogoAndTitle />
      <SearchBox />
      <MenuTop />
      <MenuBottom />
    </SideBarStyled>
  );
};

export default SideBar;
