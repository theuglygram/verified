import React from "react";
import styled from "styled-components";
import { LargeTxt, MediumTxt } from "../styles/GlobalStyles";

const CardSection3 = () => {
  return (
    <>
      <Wrapper>
        <CardHolder>
          <CardContent></CardContent>
          <TextContent>
            <HeaderTxt>
              We offer the most identity verification options .
            </HeaderTxt>
            <BodyTxt>
              Get a detailed understanding of the identity of your users without
              having to spend time building things out yourself and worrying
              about compliance and privacy issues.
            </BodyTxt>
          </TextContent>
        </CardHolder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 500px;
  background: #fafafa;
  margin: 18px auto;
  border-radius: 5px;
  padding: 0px 20px;
  @media only screen and (max-width: 650px);
   {
    height: auto;
  }
`;
const CardHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 200px;
  margin: 44px auto;
  height: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
const CardContent = styled.div`
  width: 500px;
  height: 400px;
  background: #efefef;
  margin: 44px auto;
  @media only screen and (max-width: 650px) {
    width: 250px;
    height: 250px;
  }
`;
const TextContent = styled.div`
  margin: 44px auto;
`;

const HeaderTxt = styled(LargeTxt)`
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 650px) {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  } ;
`;
const BodyTxt = styled(MediumTxt)`
  margin: 24px 0;
  color: #999999;
  font-family: Usual;
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 34px;
  letter-spacing: 0em;
  @media only screen and (max-width: 650px) {
    font-size: 18px;
    font-style: normal;

    line-height: 1.4;
  } ;
`;

export default CardSection3;
