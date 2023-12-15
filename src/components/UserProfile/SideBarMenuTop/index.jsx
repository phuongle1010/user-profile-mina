import MenuTopStyled from "./styles";

const MenuTop = () => {
  const menuItem = [
    {
      title: "Home",
      src: "/src/assets/home.png",
      arrowSrc: "/src/assets/arrow-down.png",
      subMenuStatus: false,
    },

    {
      title: "Dashboard",
      src: "/src/assets/dashboard.png",
      arrowSrc: "/src/assets/arrow-down.png",
      subMenuStatus: false,
    },

    {
      title: "Projects",
      src: "/src/assets/project.png",
      arrowSrc: "/src/assets/arrow-down.png",
      subMenuStatus: false,
    },

    {
      title: "Tasks",
      src: "/src/assets/task.png",
      arrowSrc: "/src/assets/arrow-down.png",
      subMenuStatus: false,
    },

    {
      title: "Reporting",
      src: "/src/assets/reporting.png",
      arrowSrc: "/src/assets/arrow-down.png",
      subMenuStatus: false,
    },

    {
      title: "Designers",
      src: "/src/assets/designer.png",
      arrowSrc: "/src/assets/arrow-up.png",
      subMenuStatus: true,
    },
  ];

  const subMenuItem = [
    {
      title: "All designers",
    },

    {
      title: "Popular",
    },

    {
      title: "Recently added",
    },
  ];
  return (
    <MenuTopStyled>
      {menuItem.map((item) => (
        <li key={item.title}>
          <div>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
            <img src={item.arrowSrc} alt="arrow" />
          </div>
          {item.subMenuStatus ? (
            <ul>
              {subMenuItem.map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </MenuTopStyled>
  );
};

export default MenuTop;
