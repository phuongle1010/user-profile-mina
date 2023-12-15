import styled from "styled-components";

const SearchBoxStyled = styled.div`
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    padding: 8px 8px 8px 35px;
    font-size: 17px;
    border-radius: 5px;
    border-color: 1px solid #e6e7eb;
    font-weight: 500;
  }

  & > img {
    position: absolute;
    top: 7px;
    left: 5px;
  }
`;

export default SearchBoxStyled;
