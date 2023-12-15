import SearchBoxStyled from "./styles";

const SearchBox = () => {
  return (
    <SearchBoxStyled>
      <input type="text" placeholder="Search" />

      <img src="/src/assets/search.png" alt="" />
    </SearchBoxStyled>
  );
};

export default SearchBox;
