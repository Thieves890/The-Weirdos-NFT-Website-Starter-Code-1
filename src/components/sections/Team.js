import React from 'react';
import styled from 'styled-components';
import ConfettiComponent from '../Confetti';

import img1 from '../../assets/IMG-3248.PNG';
import img2 from '../../assets/IMG-3249.PNG';
import img3 from '../../assets/IMG-3250.PNG';
import img4 from '../../assets/IMG-3251.PNG';
import img5 from '../../assets/IMG-3252.PNG';


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
`

const Item = styled.div`
width: calcl(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
    img{
        transform: translateY(-2rem) scale(1.2);
    }
}
`

const Container = styled.div`

width: 100%;
margin: 2 rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`

const Name = styled.h2`
font-size: ${props => props.theme.font1g};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=" ",position=" "}) => {

    return(
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    )
}

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}
`

const Team = () => {
    return (
        <Section id="team">
            <ConfettiComponent />
            <Title>Team</Title>
            <Container>
                <MemberComponent img={img1} name="Aexi" position="Founder" />
                <MemberComponent img={img2} name="Dro" position="Artist" />
                <MemberComponent img={img3} name="Tidal" position="Community Manager" />
                <MemberComponent img={img4} name="Gabz" position="Collab Manager" />
                <MemberComponent img={img5} name="Peacock" position="Moderator" />
            </Container>
        </Section>
    )
}

export default Team