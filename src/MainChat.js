import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import OneChat from './OneChat';

const MCcontainer = styled.div`
flex:0.75;
background-color:#f7f7f7;
display:flex;
flex-direction:column;

/* padding:20px; */
`

const MCheader = styled.div`
background-color:#ebebeb;
height:10%;
display:flex;
align-items:center;
/* justify-content:space-between; */
border-bottom:1px solid lightgray;

/* margin:20px; */
`
const Uname = styled.h3`
 padding-left:40px;
`

const LeftDiv = styled.div`
display:flex;
/* flex-direction:ro; */
align-items:center;
flex:1;
padding:20px;

`

const RightDiv = styled.div`
display:flex;
/* flex-direction:ro; */
align-items:center;
padding:20px;
justify-content:space-around;
min-width:100px;

`
const MCBody = styled.div`
     flex: 1;
    background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow:scroll;
    max-height:70vh;
`
function MainChat({ imgsrc }) {


    const [input, setInput] = useState("");

    const sendMessage = (e) => {

        e.preventDefault();
        setInput("");
    }

    return (
        <MCcontainer>
            <MCheader>
                <LeftDiv>
                    <IconButton>
                        <Avatar alt="Remy Sharp" src={imgsrc} />
                    </IconButton>
                    <Uname> Suraj Yadav </Uname>
                </LeftDiv>
                <RightDiv>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </RightDiv>


            </MCheader>

            <MCBody>
                {/* {messages.map(message => ( */}
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="hello!!" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="kal exam hai" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="ha hai" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="Notes send kar" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="1,2,3 chp padh le" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="OK!" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={false} />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={true} docUrl='https://i.pravatar.cc/200' />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={true} docUrl='https://i.pravatar.cc/200' />
                <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="hello!!" isDoc={true} docUrl='https://i.pravatar.cc/200' />



            </MCBody>
            <div className='chat_footer'>
                {/* <InsertEmoticonIcon /> */}
                <form className="formclass">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <SendIcon type="submit" onClick={sendMessage}> Send a Message</SendIcon>

                </form>

            </div>


        </MCcontainer >
    )
}

export default MainChat
