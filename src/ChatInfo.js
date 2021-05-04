import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const Ccontainer = styled.div`
display:flex;
height:4%;
/* background-color: grey; */
border-bottom: 1px solid #f6f6f6;
align-items:center;
padding:20px;
cursor: pointer;
&:hover {
        background-color:#ebebeb;
    }


`
const Cbody = styled.div`
display:flex;
flex-direction:column;
padding:10px;
align-items:center;
justify-content:flex-start;

`
const Lastmsg = styled.small`
color:gray;
padding-left:5px;
`
function ChatInfo({ imgsrc, uname, lastmsg }) {
    return (
        <Ccontainer>
            <IconButton>
                <Avatar alt="Remy Sharp" src={imgsrc} />
            </IconButton>
            <Cbody>
                <h3>{uname}</h3>
                <Lastmsg> {lastmsg}</Lastmsg>
            </Cbody>
        </Ccontainer>
    )
}

export default ChatInfo
