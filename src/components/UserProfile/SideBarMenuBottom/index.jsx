import CardUser from "../SideBarUserCard";
import MenuBottomStyled from "./styles";

const MenuBottom = () => {
  const menuItem = [
    {
      title: "Support",
      src: "/src/assets/support.png",
      subMenuStatus: false,
    },

    {
      title: "Setting",
      src: "/src/assets/setting.png",
      subMenuStatus: false,
    },
  ];

  const subMenuItem = [];
  return (
    <MenuBottomStyled>
      {menuItem.map((item) => (
        <li key={item.title}>
          <div>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
          {item.submenuStatus ? (
            <ul>
              {subMenuItem.map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
      <CardUser />
    </MenuBottomStyled>
  );
};

export default MenuBottom;
