import React from "react";
import { Btn, LargeTxt, MediumTxt, SmallTxt } from "../styles/GlobalStyles";
import styled from "styled-components";

const HeroSection1 = () => {
  return (
    <WrapperHolder>
      <Wrapper>
        <Meet>Meet Verifiedly</Meet>
        <Auto>
          Automate your <br />
          identity verification
        </Auto>
        <Trust>
          Companies trust us to handle their identity verifications <br />
          and maintain their KYC / AML compliance.
        </Trust>
        <BtnWrapper>
          <Btn1>Sign Up</Btn1>
          <Btn2>Contact Sales</Btn2>
        </BtnWrapper>
      </Wrapper>
      <BlackBox></BlackBox>
    </WrapperHolder>
  );
};
const WrapperHolder = styled.div`
  background: #efefef;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const BlackBox = styled.div`
  width: 1000px;
  height: 478px;
  background: #000000;
  @media only screen and (max-width: 650px) {
    width: 300px;
    height: 300px;
  }
`;
const Wrapper = styled.div`
  padding: 88px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Meet = styled(SmallTxt)`
  text-align: center;
`;
const Auto = styled(LargeTxt)`
  text-align: center;
  margin: 18px 0;
  @media only screen and (max-width: 650px) {
    font-size: 40px;
  }
`;
const Trust = styled(MediumTxt)`
  text-align: center;
  margin: 24px 0;
  color: #999999;
  @media only screen and (max-width: 650px) {
    font-size: 18px;
    line-height: 1.5;
  } ;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const Btn1 = styled(Btn)`
  background: #000;
  color: #fff;
  @media only screen and (max-width: 650px) {
    width: 140px;
  } ;
`;
const Btn2 = styled(Btn)`
  background: #fff;
  border: 1px solid #999999;
  @media only screen and (max-width: 650px) {
    width: 140px;
  } ;
`;

export default HeroSection1;
