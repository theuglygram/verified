import React from "react";
import styled from "styled-components";
import { SmallTxt } from "../styles/GlobalStyles";

const Card1 = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Hold>
            <Box></Box>
            <Text>99.98% reliability uptime since launch.</Text>
          </Hold>
          <Hold>
            <Box></Box>
            <Text>Fastest request and response rate in the industry.</Text>
          </Hold>
          <Hold>
            <Box></Box>
            <Text>Built-in fraud detection systems for protection.</Text>
          </Hold>
        </Content>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div``;
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
export default Card1;
