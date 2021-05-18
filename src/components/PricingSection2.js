import React from "react";
import styled from "styled-components";
import PricingCards from "./PricingCards";
import PricingText from "./PricingText";

const PricingSection2 = () => {
  return (
    <Wrapper>
      <PricingText />
      <PricingCards />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1300px;
  width: 100%;
  margin: 140px auto;
  @media only screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr;
    text-text-align: center;
    margin: 140px auto;
  }
`;
export default PricingSection2;
