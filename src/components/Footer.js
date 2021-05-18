import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <FooterHolder>
          <VerifiedContent>
            <HeadTxt>Verifiedly</HeadTxt>
            <Lists>Partner with us</Lists>
            <Lists>Custom Solution</Lists>
            <Lists> Investors </Lists>
          </VerifiedContent>
          <CompanyContent>
            <HeadTxt>Company</HeadTxt>
            <Lists>Contact Us</Lists>
            <Lists> Careers</Lists>
            <Lists>About</Lists>
          </CompanyContent>
          <Products>
            <HeadTxt>Products</HeadTxt>
            <Lists>Contact Us</Lists>
            <Lists> Careers</Lists>
            <Lists>About</Lists>
          </Products>
          <Resources>
            <HeadTxt>Resources</HeadTxt>
            <Lists>Contact Us</Lists>
            <Lists> Careers</Lists>
            <Lists>About</Lists>
          </Resources>
        </FooterHolder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  background: #000;
`;
const Products = styled.div``;
const Resources = styled.div``;
const FooterHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 120px 0;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 70px 20px;
  }
`;
const VerifiedContent = styled.div``;
const HeadTxt = styled.h4`
  text-transform: uppercase;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin: 40px 0;
  color: #fff;
`;
const Lists = styled.li`
  list-style: none;
  margin: 16px 0;
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
const CompanyContent = styled.div``;
export default Footer;
