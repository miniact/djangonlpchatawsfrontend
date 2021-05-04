import React from 'react'
import MainChat from './MainChat'
import Sidebar from './Sidebar'

import styled from "styled-components";

const Body = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
    /* background-color:#47dca2;
     */
    background: linear-gradient(to bottom right, #47dca2 0%, #04bca0 100%);
    height:100vh;
    width:100wh;
    

`

const Container = styled.div`
    display:flex;

    top:25px;
    background-color:white;
    min-width:95%;
    min-height:95%;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`

function Chat() {
    return (
        <Body>
            <Container>
                <Sidebar />
                <MainChat />
            </Container>
        </Body>
    )
}

export default Chat
