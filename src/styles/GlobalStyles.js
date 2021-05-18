import styled from "styled-components";

export const Btn = styled.button`
  width: 180px;
  height: 58px;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: none;
  transition: 0.5s ease;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const SmallTxt = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
`;
export const MediumTxt = styled.p`
  font-family: Usual;
  font-style: normal;
  font-weight: 350;
  font-size: 24px;
  line-height: 29px;
`;
export const LargeTxt = styled.h2`
  font-weight: 600;
  font-size: 64px;
  line-height: 76px;
`;
