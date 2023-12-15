import styled from "styled-components";

const MenuBottomStyled = styled.ul`
list-style: none;
position: absolute;
bottom: 20px;
width: calc(100% - 30px);
  
  & > li {
    display: flex;
    flex-direction: column;
    

    & > div {
      display: flex;
      padding: 10px;
      justify-content: space-between;
      position: relative;
      
      & > img {
      width: 18px;
      height: 18px;
      }

      & > p {
      margin-right: auto;
      padding-left: 5px;
      font-size: 15px;
      font-weight: 600;
      color: #464955
      }

      &:hover {
        cursor: pointer;
        background-color: #ccc;
        background-clip: border-box;
        width: 100%;
        height: 100%;
      }
    }
    & > ul {
      list-style: none;

      & > li {
      margin-right: 20px;
      padding: 10px 10px 10px 34px;
      font-size: 15px;
      font-weight: 600;
      color: #464955;
      cursor: pointer;
      }
    }
`;

export default MenuBottomStyled;
