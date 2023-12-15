import styled from "styled-components";

const LogoAndTitleStyled = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  & > p {
    font-size: 24px;
    font-weight: bolder;
    color: #464955;
  }
`;

export default LogoAndTitleStyled;
