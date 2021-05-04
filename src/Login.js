import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core';

const LContainer = styled.div`
    
    text-align: center;
    /* background-color: white; */
    padding:20px;
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgba(1, 0, 0, 1), 0 1px;

    
`
const Cimg = styled.img`
    
    object-fit: contain;
    height: 50%;
    margin-bottom: 40px;

`


function Login() {
    return (
        <LContainer>
            {/* <Button />
            <img width='70%' src="" alt="intro" /> */}

            <div className="login_container">
                <Cimg src="https://trello-attachments.s3.amazonaws.com/5f81c78bb4c7951c3be5060c/5fb1d3656e20326524242704/fd6debd661d28abc2d9fda3d18261af8/NLP_WATTSAPP.png" alt="" />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" style={{ color: 'white', backgroundColor: 'green' }}>Sign in With Google</Button>
            </div>

        </LContainer >
    )
}

export default Login
