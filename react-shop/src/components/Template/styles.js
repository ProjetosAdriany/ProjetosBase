import styled from "styled-components";
import { AppBar, Box } from "@material-ui/core";

export const AppBarBlack = styled(AppBar)`
  background: var(--black) !important;
`;
export const Footer = styled(Box)`
  background: var(--black);
  padding: 8vh 10vh;
  margin-top: 30px;
`;
export const TitleFooter = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: ${(props) => props.size + "px"};
  line-height: 36px;
  color: #fff;
  text-align: center;
`;
export const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding-top: ${(props) => props.paddingTop + "vh"};
`;
export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  color: var(--black);
  border-radius: 50%;
  width: 50px;
  border: none;
  height: 50px;
  font-size: 30px;
`;
export const Search = styled.input`
  height: 36px;
  width: 90%;
  border-radius: 30px;
  background: #969696;
  border: none;
  &::placeholder {
    font-weight: bold;
    color: var(--white);
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    padding-left: 20px;
  }
`;
export const ButtonCart = styled.a`
  cursor: pointer;
  padding: 10px;
  span {
    padding-left: 5px;
  }
`;
