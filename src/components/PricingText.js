import React from "react";
import styled from "styled-components";
import { LargeTxt, MediumTxt } from "../styles/GlobalStyles";
const PricingText = () => {
  return (
    <>
      <Wrapper>
        <TextContent> Fair pricing for everyone</TextContent>
        <ParaText>
          Whether you plan on working on a small project or large, we got you
          covered
        </ParaText>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 650px) {
    padding: 0px 20px;
  }
`;
const TextContent = styled(LargeTxt)`
  @media only screen and (max-width: 650px) {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }
`;
const ParaText = styled(MediumTxt)`
  color: #999999;
  @media only screen and (max-width: 650px) {
    font-size: 18px;
    font-style: normal;
    line-height: 1.4;
  }
`;

export default PricingText;
