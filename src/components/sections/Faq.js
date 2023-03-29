import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  width: 80%;
  color: ${(props) => props.theme.body};
  line-height: 1.2;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
    
let element = ref.current;

ScrollTrigger.create({
    trigger: element,
    start:'top top',
    end:'bottom top',
    pin:true,
    pinSpacing:false,
    scrub:true,
})

    return () => {
        ScrollTrigger.kill();
    };
}, [])

    return (
        <Section ref={ref} id="faq">
            <Title>Faq</Title>
         <Container>
<Box>
    <Accordion title="WHY SHOULD I MINT AN APE?" >
    Apes List is on a mission to redefine utility. Not only do you get access to an insane amount of utility but you'll also be invited to an exclusive group full of money hungry Apes!
    </Accordion>
    <Accordion title="WHAT CAN I ACCESS ON THE DASHBOARD?" >
    The Dashboard allows holders to put their apes to sleep & passively earn Fruit, use the Analyser Tool to get details about any Ape in the collection, give their Ape its own custon name and lore, enter lottery draws, as well as see rewards they've won in weekly raffles.
    </Accordion>
    <Accordion title="WHAT IS   FRUIT COIN?" >
    Fruit Coin is what fuels the Apes! Earn it by sleeping and spend it in the Apes Marketplace, on upgrading your Ape or exchange it for ETH! The possibilities truly are endless.
    </Accordion>
</Box>
<Box>
    <Accordion title="WHY IS THE MINT PRICE SO AFFORDABLE?" >
    Quality over quantity couldn't be more accurate when it comes to Apes List. Thieves Labs are focused on providing the best utility at the best price and what's better is we've already built most of the utility before mint so it will be ready for you as soon as you mint! A 0.02 ETH mint price accurately reflects the endless value provided and is truly a great representation of what the Apes have to offer!
    </Accordion>
    <Accordion title="WHAT IS SLEEPING?" >
   Sleeping is the Apes List way of staking. Our advanced staking mechanism means that your Ape will never even leave your wallet whilst you earn FRUIT Coin! That's why we call it sleeping, because it's much safer than staking and you can earn FRUIT while you sleep!
    </Accordion>
    <Accordion title="WHERE CAN I VIEW MY NFTS?" >
    Once minted or bought simply connect to your OpenSea account to view your NFTs.
    </Accordion>
</Box>
         </Container>
        </Section>
    )
}

export default Faq