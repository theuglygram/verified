import React from "react";
import styled from "styled-components";
import { Btn, MediumTxt, SmallTxt } from "../styles/GlobalStyles";

const PricingCards = () => {
  return (
    <>
      <Wrapper>
        <CardHolder>
          <CardRight>
            <SmallBox></SmallBox>
            <Pay>Pay as you go</Pay>
            <Price>$0.25</Price>
            <SmallText>
              Only pay for what you use. No monthly fees, nothing!
            </SmallText>
            <GetBtn> Get Started</GetBtn>
          </CardRight>
          <CardLeft>
            <SmallBox></SmallBox>
            <Pay>Enterprise</Pay>
            <Price>$0.10</Price>
            <SmallText>
              If you need something on the larger scale of things and require
              some arrangements.
            </SmallText>
            <GetBtn> Contact Sales</GetBtn>
          </CardLeft>
        </CardHolder>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    padding: 50px 5px;
  }
`;
const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;
const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 450px;
  background: #fcfcfc;
  transition: all 0.9s ease;
  :hover {
    background: #000;
  }
  @media only screen and (max-width: 650px) {
    height: auto;
  }
`;
const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 450px;
  background: #fcfcfc;
  transition: all 0.9s ease;
  :hover {
    background: #000;
  }
  @media only screen and (max-width: 650px) {
    height: auto;
  }
`;
const SmallBox = styled.div`
  width: 60px;
  height: 60px;
  background: #c4c4c4;
  margin: 40px 0;
`;
const Pay = styled(SmallTxt)`
  font-weight: 600;
  margin: 15px 0;
  ${CardRight}:hover & {
    color: #fff;
  }
  ${CardLeft}:hover & {
    color: #fff;
  }
`;
const Price = styled.h2`
  font-size: 40px;
  font-style: normal;
  font-weight: 350;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  margin: 24px 0;
  ${CardRight}:hover & {
    color: #fff;
  }
  ${CardLeft}:hover & {
    color: #fff;
  }
`;
const SmallText = styled(MediumTxt)`
  color: #999999;
  font-size: 18px;
`;
const GetBtn = styled(Btn)`
  background: #000;
  color: #fff;
  margin: 40px 0;
  ${CardRight}:hover & {
    background: #fff;
    color: #000;
  }
  ${CardLeft}:hover & {
    background: #fff;
    color: #000;
  }
`;

export default PricingCards;
