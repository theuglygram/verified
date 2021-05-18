import React from "react";
import styled from "styled-components";
import noise from "../assets/noise.png";
import { Btn, LargeTxt, MediumTxt } from "../styles/GlobalStyles";
const PricingSection = () => {
  return (
    <>
      <Wrapper>
        <TextContent>
          <Pricing>With pricing that's just right,</Pricing>
          <SmallText>
            You never have to feel like you're paying too much or paying for
            <br />
            something you dont use. From small developers to large enterprises,
            <br />
            our pricing is just right.
          </SmallText>
          <PricingBtn> See Pricing</PricingBtn>
        </TextContent>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${noise});
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    height: auto;
  }
`;
const TextContent = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
`;
const Pricing = styled(LargeTxt)`
  margin: 24px 0;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 650px) {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }
`;
const SmallText = styled(MediumTxt)`
  font-weight: 350;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #999999;
  margin: 40px 0;
  @media only screen and (max-width: 650px) {
    font-size: 18px;
    font-style: normal;
    line-height: 1.4;
  }
`;
const PricingBtn = styled(Btn)`
  color: #fff;
  background: #000;
`;
export default PricingSection;
