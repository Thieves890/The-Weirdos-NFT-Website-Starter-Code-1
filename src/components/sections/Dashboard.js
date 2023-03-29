import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../Button';
import {dark} from '../../styles/Themes';
import img from '../../assets/mac.png';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em) {
    width: 85%;
}

@media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 80%;
    }
}

@media (max-width: 40em) {


    &>*:last-child{
        width: 90%;
    }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em) {
    min-height: 50vh;
}

img{
    width: 120%;
    height: auto;
}
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxx1};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;

@media (max-width: 64em) {
    width: 100%;
    text-align: center;
}

@media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontx1};
}

@media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};

}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};

}
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
}

@media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
}

@media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};

}
`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
align-self: flex-start;

@media (max-width: 64em) {
    width: 100%;

    button{
        margin: 0 auto;
    }

}
`

const About = () => {
    return (
        <Section id="dashboard">
            <Container>
                <Box> <img src={img} /> </Box>
                <Box>
                <Title>
                    The Dashboard
                </Title>
                <SubText>
                The Dashboard allows holders to put their apes to sleep & passively earn Fruit, use the Analyser Tool to get details about any Ape in the collection, give their Ape its own custon name and lore, enter lottery draws, as well as see rewards they've won in weekly raffles.
                </SubText>
                <SubTextLight>
                With an insane amount of utility packed into one application, the Apes Dashboard truly is one of the most powerful tools in Web3.
                </SubTextLight>
                <ButtonContainer>
                <ThemeProvider theme={dark}>
                <Button text="VISIT THE DASHBOARD" link="https://app.apeslist.io" />
                </ThemeProvider>
                </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About