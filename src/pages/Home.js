import React from "react";
import styled from "styled-components";
import CardSection1 from "../components/CardSection1";
import CardSection2 from "../components/CardSection2";
import CardSection3 from "../components/CardSection3";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection1 from "../components/HeroSection1";
import HeroSection2 from "../components/HeroSection2";
import HeroSection5 from "../components/HeroSection5";
import PricingSection from "../components/PricingSection";
import PricingSection2 from "../components/PricingSection2";

const Home = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <HeroSection1 />
        <HeroSection2 />
        <CardSection1 />
        <CardSection2 />
        <CardSection3 />
        <PricingSection />
        <PricingSection2 />
        <HeroSection5 />
      </Wrapper>

      <Footer />
    </>
  );
};
const Wrapper = styled.div`
  padding: 0px;
`;
export default Home;
