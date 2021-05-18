import React from "react";
import styled from "styled-components";
import { Btn, LargeTxt } from "../styles/GlobalStyles";

const HeroSection5 = () => {
  return (
    <>
      <Wrapper>
        <ContentHolder>
          <TextContent>Get your API Key now</TextContent>
          <BtnHolder>
            <Btn1>Get it now</Btn1>
            <Btn2>View Docs</Btn2>
          </BtnHolder>
        </ContentHolder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  background: #f4f4f4;
  @media only screen and (max-width: 650px) {
    padding: 0px 20px;
  }
`;
const ContentHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 119px 0;
  text-align: center;
`;
const TextContent = styled(LargeTxt)`
  text-align: center;
  margin: 18px 0;
  @media only screen and (max-width: 650px) {
    font-size: 40px;
  }
`;
const BtnHolder = styled.div`
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
  }
`;

const Btn2 = styled(Btn)`
  background: #fff;
  border: 1px solid #999999;
  @media only screen and (max-width: 650px) {
    width: 140px;
  } ;
`;
export default HeroSection5;
