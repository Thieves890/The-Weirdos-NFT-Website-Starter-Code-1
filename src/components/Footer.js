import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo';

import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import LinkedIn from '../Icons/LinkedIn';

import img from '../assets/opensea.png';
import img1 from '../assets/etherscan.png';
import img2 from '../assets/twitter.png';
import img3 from '../assets/discord.png';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 48em) {
    width: 90%;
    h1 {
      font-size: ${(props) => props.theme.fontxxl};
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  
  img{
    width: 30%;
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
    span {
      margin-bottom: 1rem;
    }
  }
`;


const Footer = () => {

    const scrollTo = (id) => {
        let element = document.getElementById(id);
    
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }

    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                <Logo />
                <IconList>
                    <a href="https://twitter.com/ApesList" target='_blank' rel="noopener" >
                        <img className="twitter" src={img2} />
                    </a>
                    <a href="https://discord.gg/apeslist" target='_blank' rel="noopener" >
                        <img className="discord" src={img3} />
                    </a>
                    <a href="https://opensea.io/collection/apeslist" target='_blank' rel="noopener" >
                        <img className="opensea" src={img} />
                    </a>
                    <a href="https://etherscan.io" target='_blank' rel="noopener" >
                        <img className="etherscan" src={img1} />
                    </a>
                </IconList>
                </Left>
                <MenuItems>
                <Item onClick={() => scrollTo('home')}>Home</Item>
                    <Item onClick={() => scrollTo('about')}>About</Item>
                    <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
                    <Item onClick={() => scrollTo('dashboard')}>Dashboard</Item>
                    <Item onClick={() => scrollTo('team')}>Team</Item>
                    <Item onClick={() => scrollTo('faq')}>Faq</Item>
                </MenuItems>
            </Container>

            <Bottom>
        <span>
          &copy; {new Date().getFullYear()} - Apes List. All Rights Reserved.
        </span>

        <span>
          Made By:{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Thieves Labs
          </a>
        </span>
      </Bottom>
        </Section>
    )
}

export default Footer