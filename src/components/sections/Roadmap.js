import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxx1};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontx1};
}
`

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${props => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em) {
    width: 80%;
}
@media (max-width: 48em) {
    width: 90%;
}
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style:none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
    width: 90%;
}

&>*:nth-of-type(2n +1){
    justify-content: start;

    @media (max-width: 48em) {
        justify-content: center;
    }

    div{
        border-radius: 50px 0 50px 0;
        text-align:right;

        @media (max-width: 48em) {
            border-radius: 0 50px 0 50px ;
        text-align:left;

        p{
            border-radius: 0 40px 0 40px ;
        }
        }

    }
    p{
        border-radius: 40px 0 40px 0;
    }
}
&>*:nth-of-type(2n){
    justify-content: end;

    @media (max-width: 48em) {
        justify-content: center;
    }

    div{
        border-radius: 0 50px 0 50px ;
        text-align:left;
    }
    p{
        border-radius: 0 40px 0 40px ;
    }
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em) {
    justify-content: flex-end !important;
}
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em) {
    width: 70%;
}
`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontx1};
text-transform:capitalize;
color: ${props => props.theme.text};

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
}
`


const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform:capitalize;
color: ${props => props.theme.text};

font-weight:400;
margin: 0.5rem 0;

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontxs};
}
`

const RoadMapItem = ({title, subtext,addToRef}) => {

    return(
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle> {title} </SubTitle>
                    <Text> {subtext} </Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}

const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];
gsap.registerPlugin(ScrollTrigger);

const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
}

useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach( (el, index) => {

        t1.fromTo(
            el.childNodes[0],
            {
                y: '0'
            },{
                y: '-30%',

                scrollTrigger:{
                    id: `section-${index +1}`,
                    trigger: el,
                    start: 'top center+=200px',
                    end: 'bottom center',
                    scrub:true,
                }
            }
        )

    } )

    return () => {

    };
}, [])

    return (
        <Section id="roadmap">
          <Title>Roadmap</Title>  
          <Container>
            <SvgContainer>
                <DrawSvg />
            </SvgContainer>
            <Items>
                <Item>&nbsp;</Item>
                <RoadMapItem addToRef={addToRefs} title="Dashboard Launch" subtext="The Dashboard allows holders to put their apes to sleep & passively earn Fruit, use the Analyser Tool to get details about any Ape in the collection, give their Ape its own custon name and lore, enter lottery draws, as well as see rewards they've won in weekly raffles." />
                <RoadMapItem addToRef={addToRefs} title="Marketplace & Shop Launch" subtext="The Marketplace is where Apes can spend their hard-earned Fruit on Crypto, NFTs & IRL events. The launch of the shop will see the release of Ape Figurines, limited edition merchandise & the story of the Jungle book. The affiliate programme means that holders can passively earn a percentage of sales!" />
                <RoadMapItem addToRef={addToRefs} title="Liqudity Launch & Royalty Share" subtext="The liquidity launch will see Fruit being listed on decentralised exchanges, meaning Apes can trade their Fruit for Ethereum! This allows us to provide regular Fruit airdrops to top holders that they can then exchange if they wish." />
                <RoadMapItem addToRef={addToRefs} title="Research Tool & Web3 Services" subtext="The launch of the research tool will provide holders an in-depth analysis of any NFT project, further enhancing their knowledge and ability to profit. Web3 Services will also be provided to holders, allowing you to bring your vision to life, the right way." />
                <RoadMapItem addToRef={addToRefs} title="Video Platform & Discord Bot Launch" subtext="The educational video platform allows Apes to upload Crypto/NFT videos and earn Fruit every time the video is watched. Users of the platform will need to spend Fruit to watch these videos. The integration of our Discord Bot will also allow holders to apply for Web3 jobs and have easy access to our Analyser Tool within Discord!" />
            </Items>
          </Container>
        </Section>
    )
}

export default Roadmap