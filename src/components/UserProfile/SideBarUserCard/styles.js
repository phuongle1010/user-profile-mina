import styled from "styled-components";

const UserCardStyled = styled.div`
  display: flex;
  border: 1px solid #cccccc6b;
  padding: 8px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    transition: all, 0.5s;
  };

  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  };

  & > img:last-child {
    width: 20px;
    height: 20px;

    &:hover {
    transform: scale(1.1);
    transition: all, 0.5s;
    }
  };

  & > div {
    margin-right: auto;
    padding-left: 8px;
    font-size: 12px;
    color: #464955;
    display: inline-block;

    & > p:first-child {
      font-weight: bold
    };
  }
    
  }
`;

export default UserCardStyled;
