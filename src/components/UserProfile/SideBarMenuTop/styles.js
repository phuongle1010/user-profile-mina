import styled from "styled-components";

const MenuTopStyled = styled.ul`
  list-style: none;
  
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

      & >img:last-child:hover {
        transform: scale(1.2);
        transition: all, 0.5s;
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
        background-color: #cccccc36;
      }
    }
    & > ul {
      list-style: none;

      & > li {
      padding: 10px 0px 10px 34px;
      font-size: 15px;
      font-weight: 600;
      color: #464955;
      
      &:hover {
        cursor: pointer;
        background-color: #cccccc36;
      }
      
    }
  }

`;

export default MenuTopStyled;
