import * as React from 'react';
import styled from "styled-components";
import Clock from "../clock/clock.js";

const Header = () => {
    const Header = styled.div`
      border: 1px solid black;
      padding: 10px;
    `

    return (
        <Header>
            menu
            <ul>

                <li>asd</li>
                <li>asd</li>
            </ul>
            <Clock/><br/>
            <span>Moscow</span>
        </Header>
    );
};

export default  Header;
