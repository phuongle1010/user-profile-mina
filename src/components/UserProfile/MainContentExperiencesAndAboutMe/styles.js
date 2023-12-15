import styled from "styled-components";

const ExperiencesAndAboutMeStyled = styled.div`
  width: 60%;
  background-color: #f9fafc;
  margin: 0 15px;
  padding: 20px;
  font-size: 15px;

  & > div {
    margin-bottom: 15px;

    &:first-child {
      border-bottom: 1px solid #ccc;
      padding-bottom: 15px;
    }

    & > p {
      & > span {
        text-decoration: underline;
      }
    }

    & > h4 {
      margin-bottom: 5px;
      position: relative;

      & > img {
        margin-left: 5px;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 1px;

        &:hover {
          transform: scale(1.1);
          transition: all 0.5s;
        }
      }
    }
  }
`;
export default ExperiencesAndAboutMeStyled;
