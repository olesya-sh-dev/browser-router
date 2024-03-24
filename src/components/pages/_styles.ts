import { styled } from "styled-components";

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #282c34;
  }

  & > a.active {
    color: #7fb8f1;
    text-decoration: none;
  }

  & > a:hover {
    color: steelblue;
  }
`;

export const S = {
  NavWrapper,
};
