import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Btn } from "../styles/GlobalStyles";

const Header = () => {
  return (
    <Wrapper>
      <NavContents>
        <LogoHolder>
          <Logo src={logo} />
        </LogoHolder>
        <LinkHolder>
          <Links>Partners</Links>
          <Links>Coverage</Links>
          <Links>Company</Links>
          <Links>Customers</Links>
          <Links>Documentation</Links>
        </LinkHolder>
        <DemoHolder>
          <Demo> Get a Demo</Demo>
        </DemoHolder>
        <HamBurger>
          <Lines></Lines>
          <Lines></Lines>
          <Lines></Lines>
        </HamBurger>
      </NavContents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #000;
`;
const NavContents = styled.div`
  width: 100%;
  max-width: 1241px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  align-items: center;
  background: #000;
`;
const LogoHolder = styled.div``;
const Logo = styled.img``;
const LinkHolder = styled.ul`
  display: flex;
  width: 606px;
  justify-content: space-between;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const Links = styled.li`
  color: #fff;
  list-style: none;
  font-weight: 600;
`;
const DemoHolder = styled.div`
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const HamBurger = styled.div`
  display: none;
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;
const Lines = styled.div`
  width: 30px;
  height: 2px;
  margin: 5px 15px;
  background: #fff;
`;

const Demo = styled(Btn)`
  background: #c4c4c4;
`;
export default Header;
