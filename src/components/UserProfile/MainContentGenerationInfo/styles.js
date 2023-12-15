import styled from "styled-components";

const SGenerationInfoStyled = styled.div`
  background-color: #fff;
  margin-top: 160px;
  display: flex;
  position: relative;
  padding: 7px;
  height: 130px;

  & > div:first-child {
    position: absolute;
    top: -75px;
    left: -155px;

    & > img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    & > div {
      position: absolute;
      bottom: 0;
      right: 0;
      & > img {
        width: 40px;
        height: 40px;
      }
    }
  }

  & > div {
    margin-left: 170px;
    display: flex;
    flex-direction: column;

    & > p {
      font-size: 13px;

      &:first-child {
        font-size: 16px;
        font-weight: bolder;

        & > div {
          background-color: green;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          margin-left: 5px;
        }
      }
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: row;
    margin-left: 242px;

    & > button {
      padding: 10px;
      border-radius: 5px;
      background-color: #fff;
      color: black;
      border: 1px solid grey;
      margin: 0 5px 0;
      height: 2;
      display: flex;
      height: 37px;
      align-items: center;
      font-weight: 600;

      &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
      }

      &:last-child {
        background-color: teal;
        color: #fff;
      }

      & > img {
        width: 20px;
        height: 20px;
        margin-right: 7px;
      }
    }
  }
`;

export default SGenerationInfoStyled;
