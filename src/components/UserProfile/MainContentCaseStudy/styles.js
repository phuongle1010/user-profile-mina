import styled from "styled-components";

const CaseStudyStyled = styled.div`
  padding: 20px 15px;
  background-color: #fff;
  background-clip: border-box;
  border-bottom-right-radius: 15px;

  & > div {
    display: flex;
    justify-content: space-between;

    & > p {
      display: flex;

      & > span {
        font-size: 15px;
        font-weight: bolder;
        margin-right: 5px;
      }

      & > img {
        width: 19px;
        height: 19px;

        &:hover {
          transform: scale(1.1);
          transition: all 0.5s;
        }

      }
    }
  }

  & > ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    & > li {
      margin: 0 20px 0px 0;
      padding: 30px 0 30px 30px;
      background-color: #cdacd9b0;
      position: relative;
      & > img {
        width: 275px;
        height: 200px;
      }
      
      & > div {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 25px 20px;
        width: 100%;
        background-color: #cdacd9b0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
          display: flex;

          & > span {
            font-size: 20px;
            color: #fff;
            font-weight: bolder;
            margin-right: 5px;
          }

          & > img {
            width: 24px;
            height: 24px;
          }

          }

          & > img {
            width: 35px;
            height: 35px;
            &:hover {
              transform: scale(1.1);
              transition: all 0.5s;
            }
          }
        }
      }
    }
  }
`;
export default CaseStudyStyled;
