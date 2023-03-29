import React from "react";
import styled from "styled-components";

import Button from './Button';
import img from '../assets/jungle.jpeg';

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
  @media (max-width: 64em) {
    width: 40%;
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
  }
  @media (max-width: 48em) {
    width: 100%;
    padding: 2rem 0;
    font-size: ${(props) => props.theme.fontxl};
  }
`;



const Banner = () => {
    return (
        <Section>
            <ImgContainer>
            <img src={img} alt="The Apes" />

            </ImgContainer>
            <Title>Join the Apes  <br /> In The Jungle  </Title>
        </Section>
    )
}

export default Banner