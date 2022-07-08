import React from 'react';
import {StyledAboutDiv, StyledAboutUl} from '../../assets/styled-components/about';


const About = () => {


    return (
        <>
            <StyledAboutDiv duration={1.5} delay={0}>
                <h2>About me</h2>
                <p>Hi, I'm a Single Page Application that can help you to count currency ratio.</p>
            </StyledAboutDiv>
            <StyledAboutDiv duration={1.5} delay={0.2}>
                <h2>Stack</h2>
                <StyledAboutUl>
                    I had been made with:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>StyledComponents</li>
                    <li>Axios</li>
                    <li>React-Route</li>
                    <li>React-Hook-Form</li>
                </StyledAboutUl>
            </StyledAboutDiv>
            <StyledAboutDiv duration={1.5} delay={0.5}>
                <h2>Special thanks</h2>
                <p> That you spend your time for take a look how i'm working </p>
            </StyledAboutDiv>
        </>
    );
};

export default About;
