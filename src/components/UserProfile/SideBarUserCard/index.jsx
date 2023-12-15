import UserCardStyled from "./styles";

const CardUser = () => {
  const userInfo = {
    id: 1,
    name: "Phuong lee",
    nickname: "@bee",
    src: "/src/assets/avt1.jpg",
  };
  return (
    <UserCardStyled>
      <img src={userInfo.src} alt={userInfo.name} />
      <div>
        <p>{userInfo.name}</p>
        <p>{userInfo.nickname}</p>
      </div>
      <img
        src="/src/assets/change.png"
        alt="change-arrow"
        className="changeArrow"
      />
    </UserCardStyled>
  );
};

export default CardUser;
