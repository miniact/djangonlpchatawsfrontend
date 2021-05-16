import React from 'react'
import styled from 'styled-components'

const PContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:1
`

const Pdiv = styled.div`
    align-items:center;

`
function Promo() {
    return (
        <PContainer>

            <Pdiv>
                <img src="https://trello-attachments.s3.amazonaws.com/5f81c78bb4c7951c3be5060c/5fb1d3656e20326524242704/fd6debd661d28abc2d9fda3d18261af8/NLP_WATTSAPP.png" alt="" />
            </Pdiv>


        </PContainer>

    )
}

export default Promo
