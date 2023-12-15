import styled from "styled-components";

const SkillsAndContactsStyled = styled.div`
  background-color: #f9fafc;
  font-size: 15px;
  padding: 20px;
  margin-right: 15px;
  width: 40%;

  & > div {
    margin-bottom: 20px;

    & > h4 {
      margin-bottom: 5px;
    }

    & > ul {
      list-style: none;
      display: flex;

      & > li {
        border: 1px solid black;
        border-radius: 10px;
        padding: 2px 5px;
        margin-right: 3px;
        font-size: 12px;
        font-weight: bolder;
      }
    }

    & > p {
      position: relative;

      & > img {
        position: absolute;
        width: 19px;
        height: 19px;

        &:hover {
          transform: scale(1.1);
          transition: all 0.5s;
        }
      }

      & > span {
        margin-left: 22px;
      }

      & > a {
        margin-right: 5px;
      }
    }
    &:last-child {
      display: flex;
      justify-content: space-between;
      & > button {
        border: 1px solid #ccc;
        border-radius: 7px;
        padding: 8px 40px;
        background-color: #fff;
        color: black;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
          transition: all 0.5s;
        }

        &:last-child {
          background-color: black;
          color: #fff;
        }
      }
    }
  }
`;

export default SkillsAndContactsStyled;
