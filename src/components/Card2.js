import React from "react";
import styled from "styled-components";
import { SmallTxt } from "../styles/GlobalStyles";

const Card2 = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Hold>
            <Box></Box>
            <Text>Advanced integrations with enterprise softwares.</Text>
          </Hold>
          <Hold>
            <Box></Box>
            <Text>50% or more in savings compared to other services.</Text>
          </Hold>
          <Hold>
            <Box></Box>
            <Text>
              Fastest and friendliest customer support in the industry.
            </Text>
          </Hold>
        </Content>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  margin: 40px 0;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const Hold = styled.div``;
const Box = styled.div`
  width: 60px;
  height: 60px;
  background: #c4c4c4;
  @media only screen and (max-width: 650px) {
    margin: 0 auto;
  }
`;
const Text = styled(SmallTxt)`
  margin: 12px 0;
  @media only screen and (max-width: 650px) {
    text-align: center;
    font-size: 18px;
  }
`;
export default Card2;
