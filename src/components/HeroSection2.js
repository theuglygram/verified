import React from "react";
import Card1 from "./Card1";
import styled from "styled-components";
import { LargeTxt, MediumTxt, SmallTxt } from "../styles/GlobalStyles";
import Card2 from "./Card2";

const HeroSection2 = () => {
  return (
    <>
      <WrapperHolder>
        <Wrapper>
          <Description>
            <Small>Why Verifiedly</Small>
            <Durability>Designed for durability</Durability>
            <Desc>
              By developing an easy to under system, multiple document support,
              we strive to <br /> offer a good variety of options to anyone that
              wants to use our infrastructure <br />
              without spending a lot of time and money.
            </Desc>
          </Description>
          <CardHolder>
            <Card1 />
            <Card2 />
          </CardHolder>
        </Wrapper>
      </WrapperHolder>
    </>
  );
};
const WrapperHolder = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  @media only screen and (max-width: 650px) {
    padding: 50px 20px;
  }
`;
const Description = styled.div``;
const CardHolder = styled.div``;

const Small = styled(SmallTxt)`
  margin: 16px 0;
`;
const Durability = styled(LargeTxt)`
  @media only screen and (max-width: 650px) {
    font-size: 40px;
  }
`;
const Desc = styled(MediumTxt)`
  color: #999999;
  margin: 40px 0;
  @media only screen and (max-width: 650px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export default HeroSection2;
