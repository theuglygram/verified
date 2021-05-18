import React from "react";
import styled from "styled-components";

const HeroSection4 = () => {
  return (
    <>
      <Wrapper>
        <ContentHolder>
          <TextContent>
            <FairCont></FairCont>
          </TextContent>
        </ContentHolder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  @media only screen and (max-width: 650px) {
    padding: 0px 20px;
  }
`;
const ContentHolder = styled.div``;
const TextContent = styled.div``;
const FairCont = styled.div``;
export default HeroSection4;
